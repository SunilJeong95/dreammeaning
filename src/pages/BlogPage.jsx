import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogArticles } from '../data/blogArticles';

const SLUG_TO_PATH = {
  'what-do-water-dreams-mean': '/blog/water-dreams',
  'psychology-of-flying-dreams': '/blog/flying-dreams',
  'why-do-we-dream-about-teeth-falling-out': '/blog/teeth-dreams',
  'understanding-recurring-dreams': '/blog/recurring-dreams',
  'color-in-dreams': '/blog/color-in-dreams',
  'stop-nightmares': '/blog/stop-nightmares',
  'ancient-dream-traditions': '/blog/ancient-dream-traditions',
};

function ArticleCard({ article }) {
  const path = SLUG_TO_PATH[article.slug];
  return (
    <Link
      to={path}
      className="group bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/25 hover:bg-white/8 transition-all flex flex-col"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-2xl">{article.icon}</span>
        </div>
        <span className="text-xs font-semibold text-primary uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
          {article.category}
        </span>
      </div>
      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
        {article.title}
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {article.readTime}
          </span>
        </div>
        <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
          Read
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Dream Interpretation Blog | DreamLens';
    const m = document.querySelector('meta[name="description"]');
    const pd = m?.getAttribute('content');
    if (m) m.setAttribute('content', 'Explore dream science, psychology, and cultural traditions. Articles on dream symbols, recurring nightmares, ancient dream wisdom, and more.');
    return () => { document.title = prev; if (m) m.setAttribute('content', pd || ''); };
  }, []);
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6 uppercase">
            <span className="material-symbols-outlined text-sm">library_books</span>
            Dream Interpretation Blog
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 text-white leading-tight">
            Understand Your Dreams
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed px-2">
            In-depth guides to the psychology, neuroscience, and cultural traditions of dream
            interpretation. Written to help you understand what your dreams might be telling you.
          </p>
        </section>

        {/* Articles Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid md:grid-cols-2 gap-5">
            {blogArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Dictionary CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-14">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white mb-1">Browse the Dream Symbol Dictionary</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Look up 30+ common dream symbols — from snakes and spiders to flying and teeth —
                and see how each is interpreted across four traditions.
              </p>
            </div>
            <Link
              to="/dream-dictionary"
              className="shrink-0 inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary font-semibold px-5 py-2.5 rounded-full hover:bg-primary/20 transition-colors text-sm whitespace-nowrap"
            >
              Open Dictionary
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Analyze CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Analyze Your Own Dream?</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Get a personalized, AI-powered interpretation using Jungian, Freudian, Taemong, and Zhou Gong frameworks.
            Free, instant, no account required.
          </p>
          <Link
            to="/#dream-input"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#34e3fb] text-background-dark font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(30,216,241,0.3)] transition-all"
          >
            Analyze My Dream
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}

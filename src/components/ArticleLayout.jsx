import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function ArticleLayout({ title, date, readTime, category, children }) {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-gray-400">{title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-5 uppercase">
              <span className="material-symbols-outlined text-sm">library_books</span>
              {category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-5">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">schedule</span>
                {readTime}
              </span>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose-dream">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-14 p-6 md:p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Decode Your Own Dream</h3>
            <p className="text-gray-400 text-sm mb-6">
              Use DreamLens to get a personalized, multi-framework interpretation of your dream — free, instant, no account needed.
            </p>
            <Link
              to="/#dream-input"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#34e3fb] text-background-dark font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(30,216,241,0.2)]"
            >
              Analyze My Dream
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              All Articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

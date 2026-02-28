import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FRAMEWORKS = [
  {
    icon: 'psychology',
    title: 'Jungian Analysis',
    color: 'text-primary',
    bg: 'bg-primary/10',
    body: `Carl Jung believed dreams are windows into the unconscious mind — a vast inner world filled with archetypes, symbols, and collective human experience. Jungian dream analysis explores recurring symbols such as the Shadow (repressed aspects of the self), the Anima/Animus (inner feminine or masculine energy), and the Self (the totality of the psyche). When you dream of a dark pursuer, an old house, or a luminous figure, Jungian theory offers a rich symbolic vocabulary for understanding what your unconscious may be trying to communicate.`,
  },
  {
    icon: 'science',
    title: 'Freudian Analysis',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
    body: `Sigmund Freud famously described dreams as "the royal road to the unconscious." In his view, dreams are disguised fulfillments of repressed wishes. The manifest content — the literal story of the dream — conceals the latent content — the hidden psychological meaning. Freudian analysis pays close attention to emotional tone, figures of authority, water (often symbolizing emotion or the unconscious), and scenarios of flying, falling, or being chased. DreamLens draws on Freudian concepts to surface the emotional undercurrents in your dream narratives.`,
  },
  {
    icon: 'nights_stay',
    title: 'Korean Taemong (태몽)',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    body: `Taemong (태몽) is a deeply rooted Korean tradition of interpreting pregnancy-foretelling dreams. In Korean culture, vivid dreams featuring natural symbols — a blazing sun, a fierce tiger, a ripe fruit — are believed to offer signs about an unborn child's future character, fortune, and life path. Animals like dragons (great achievement), bears (determination), and fish (abundance) are especially significant. DreamLens interprets your dream through the lens of this centuries-old tradition, connecting your subconscious imagery to its cultural meaning.`,
  },
  {
    icon: 'auto_awesome',
    title: 'Chinese Zhou Gong (周公解梦)',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    body: `Zhou Gong Jie Meng (周公解梦), or "Duke of Zhou's Dream Interpretation," is one of the oldest and most comprehensive dream dictionaries in the world, dating back over 3,000 years to ancient China. It catalogues thousands of dream scenarios and their auspicious or inauspicious meanings — from dreaming of rivers and mountains to encounters with ancestors and celestial bodies. This tradition holds that dreams are messages from the spirit world offering guidance for daily decisions, relationships, and fortune. DreamLens honors this tradition by weaving its symbolic wisdom into every analysis.`,
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Describe Your Dream',
    desc: 'Write your dream in as much detail as you remember — the setting, characters, emotions, colors, and any strange or vivid moments.',
  },
  {
    num: '02',
    title: 'AI Analysis',
    desc: 'Our AI processes your dream using multiple symbolic frameworks simultaneously: Jungian archetypes, Freudian symbolism, Taemong tradition, and Zhou Gong interpretation.',
  },
  {
    num: '03',
    title: 'Dream Visualization',
    desc: 'Your dream is transformed into an AI-generated artwork, giving visual form to the imagery described in your analysis.',
  },
  {
    num: '04',
    title: 'Explore Your Results',
    desc: 'Read your psychological insights, fortune indicators, lucky signifiers, and daily advice — then share your dream card with friends.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Header />
      <main className="pt-32 pb-20">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-8 uppercase">
            <span className="material-symbols-outlined text-sm">visibility</span>
            About DreamLens
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-6 text-white leading-tight">
            Your Dreams, Decoded by AI
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            DreamLens is a free AI-powered dream interpretation service that blends modern psychology with
            ancient cultural wisdom. We believe every dream carries meaning — and that exploring that meaning
            can be a rich tool for self-reflection and creative discovery.
          </p>
        </section>

        {/* Mission */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dreams are one of the most universal human experiences, yet they remain one of the least
              understood. For thousands of years, people across every culture have sought to understand
              the strange worlds that unfold during sleep — from ancient Mesopotamian dream tablets to
              the modern consulting rooms of psychoanalysts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              DreamLens makes that rich tradition of dream interpretation accessible to everyone. By
              combining the latest AI technology with frameworks drawn from Jungian depth psychology,
              Freudian psychoanalysis, Korean Taemong tradition, and Chinese Zhou Gong wisdom, we offer
              interpretations that are both intellectually engaging and culturally meaningful — entirely
              for entertainment and creative self-reflection.
            </p>
          </div>
        </section>

        {/* Interpretation Frameworks */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Interpretation Frameworks</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Each dream analysis draws on four distinct traditions of dream interpretation, giving you
              a multi-layered perspective on your subconscious.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FRAMEWORKS.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5`}>
                  <span className={`material-symbols-outlined ${f.color} text-2xl`}>{f.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-300 text-sm leading-loose">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">From dream to insight in four simple steps.</p>
          </div>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="text-4xl font-black text-primary/30 leading-none w-12 shrink-0">{s.num}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Dreams Matter */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Dream Interpretation Matters</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Research in cognitive science suggests that dreaming plays an important role in memory
              consolidation, emotional processing, and creative problem-solving. The brain during REM
              sleep makes unexpected connections between experiences — which is why dreams often feel
              surreal, emotionally intense, or uncannily symbolic.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dream journaling — the practice of recording and reflecting on your dreams — has long been
              used as a tool for self-discovery. It can help you identify recurring emotional themes,
              process difficult experiences, and spark creative ideas. DreamLens takes this ancient
              practice and supercharges it with AI.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Please note:</strong> All analyses provided by DreamLens
              are AI-generated and intended for entertainment and creative self-reflection only.
              They are not a substitute for professional psychological or medical advice.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Decode Your Dream?</h2>
          <p className="text-gray-400 mb-8">It's free, takes 30 seconds, and no account is required.</p>
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

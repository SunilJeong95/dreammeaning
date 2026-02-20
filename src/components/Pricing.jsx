const FEATURES = [
  'Full Jungian & Freudian analysis',
  'AI dream image generation',
  'Fortune indicators & lucky elements',
  'SNS share card & PNG download',
  'Nightmare rescripting guidance',
];

function scrollToInput() {
  document.getElementById('dream-input')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Pricing() {
  return (
    <section className="max-w-md mx-auto px-6 mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">One Dream, One Price</h2>
        <p className="text-gray-500 text-sm whitespace-nowrap">
          No account needed. No subscription. Pay once, analyze once.
        </p>
      </div>

      <div className="relative rounded-3xl p-8 border border-[#1ed8f1]/40 bg-[#020617] shadow-[0_0_60px_rgba(30,216,241,0.1)]">
        {/* Top glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#1ed8f1]/60 to-transparent" />

        {/* Price */}
        <div className="text-center mb-8">
          <div className="text-7xl font-black text-white tracking-tight mb-1">$2.88</div>
          <p className="text-sm text-slate-500">per analysis</p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-[#1ed8f1] text-base shrink-0">check_circle</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={scrollToInput}
          className="w-full py-4 rounded-full bg-[#1ed8f1] hover:bg-[#34e3fb] text-[#020617] font-black text-base shadow-lg shadow-[#1ed8f1]/25 hover:shadow-[#1ed8f1]/40 transition-all flex items-center justify-center gap-2"
        >
          Analyze My Dream
          <span className="material-symbols-outlined text-xl">arrow_upward</span>
        </button>
      </div>

      <p className="text-center text-xs text-slate-600 mt-6">
        AI-generated for entertainment only. Not professional psychological or medical advice.
      </p>
    </section>
  );
}

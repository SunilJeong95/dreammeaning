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
          <div className="text-7xl font-black text-white tracking-tight mb-1">$0.99</div>
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

        {/* Payment methods */}
        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[10px] text-slate-600 uppercase tracking-wider mr-1">Accepted</span>
          {/* Apple Pay */}
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-white text-[#000] text-[11px] font-semibold tracking-tight leading-none gap-1">
            <svg width="12" height="12" viewBox="0 0 814 1000" fill="currentColor"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2c-52.5-76.9-96.5-199.2-96.5-315.7 0-204.1 143.4-314.2 282.1-314.2 73.9 0 135.5 48.8 182 48.8 44.4 0 114.1-52.9 196.5-52.9 31.6-.1 109 2.9 165.1 82.4zm-246.7-198.5c31.7-37.7 54.5-90.5 54.5-143.4 0-7.3-.6-14.6-1.9-20.5-51.9 2-112.9 35.5-149.4 78-28.5 32.6-56.5 87.1-56.5 140.5 0 8 1.3 16 1.9 18.5 3.2.6 8.4 1.3 13.7 1.3 46.4 0 103.6-31.4 137.7-74.4z"/></svg>
            Pay
          </span>
          {/* Google Pay */}
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-white text-[11px] font-semibold tracking-tight leading-none gap-0.5">
            <span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>o</span><span style={{ color: '#FBBC05' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#34A853' }}>l</span><span style={{ color: '#EA4335' }}>e</span>
            <span className="text-[#5F6368] ml-0.5">Pay</span>
          </span>
          {/* Visa */}
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-white text-[11px] font-black tracking-tight leading-none" style={{ color: '#1A1F71', letterSpacing: '-0.5px' }}>
            VISA
          </span>
          {/* Mastercard */}
          <span className="inline-flex items-center px-1.5 py-1 rounded bg-white gap-0 leading-none">
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#EB001B', display: 'inline-block' }} />
            <span className="w-4 h-4 rounded-full -ml-2" style={{ backgroundColor: '#F79E1B', display: 'inline-block', opacity: 0.9 }} />
          </span>
        </div>
      </div>

      <p className="text-center text-xs text-slate-600 mt-6">
        AI-generated for entertainment only. Not professional psychological or medical advice.
      </p>
    </section>
  );
}

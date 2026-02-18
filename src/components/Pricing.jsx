export default function Pricing() {
  return (
    <section className="max-w-5xl mx-auto px-6 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Choose Your Reality</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Free */}
        <div className="p-8 rounded-3xl border border-white/10 bg-surface-glass hover:bg-surface-glass/80 transition-colors">
          <h3 className="text-xl font-bold text-white mb-2">Dreamer Free</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-black text-white">$0</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            {['3 Dreams/month', 'Standard Resolution', 'Basic Analysis'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/5 text-white font-semibold transition-colors">
            Start Dreaming
          </button>
        </div>

        {/* Pro */}
        <div className="relative p-8 rounded-3xl border border-primary/50 bg-background-dark/80 backdrop-blur-xl shadow-[0_0_40px_rgba(30,216,241,0.15)] md:scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Most Popular
          </div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">Dreamer Pro</h3>
            <span className="text-primary material-symbols-outlined animate-pulse">auto_awesome</span>
          </div>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-5xl font-black text-white">$12</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              'Unlimited Dreams',
              '4K Resolution Export',
              'Deep Freud & Jung Analysis',
              'Priority Generation',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white font-medium">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-full bg-primary hover:bg-[#34e3fb] text-background-dark font-bold shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40">
            Get Pro
          </button>
        </div>
      </div>
    </section>
  );
}

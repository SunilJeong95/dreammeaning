const features = [
  {
    icon: 'psychology',
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10 group-hover:bg-primary/20',
    title: 'Freud-Level Analysis',
    description:
      'Our AI is trained on thousands of psychoanalytic texts to provide deep, meaningful insights into your subconscious symbols and narratives.',
    highlight: false,
  },
  {
    icon: 'hd',
    iconColor: 'text-accent-purple',
    bgColor: 'bg-accent-purple/10 group-hover:bg-accent-purple/20',
    title: '4K Visualization',
    description:
      "Don't just describe it. See it. Generate high-fidelity, print-ready 4K artwork of your dreams using our proprietary Mystical Rendering Engine.",
    highlight: true,
  },
  {
    icon: 'lock_open',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    title: 'Secure Dream Journal',
    description:
      'Your subconscious is private property. We use military-grade encryption to ensure your personal dream journal remains yours and yours alone.',
    highlight: false,
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Deep Dive into your Psyche</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Unlock the secrets of your mind with our advanced suite of mystical technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {features.map((f) => (
          <div
            key={f.title}
            className={`glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group ${
              f.highlight ? 'border-primary/20 shadow-[0_0_30px_rgba(30,216,241,0.1)]' : ''
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl ${f.bgColor} flex items-center justify-center mb-6 transition-colors`}>
              <span className={`material-symbols-outlined ${f.iconColor} text-3xl`}>{f.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

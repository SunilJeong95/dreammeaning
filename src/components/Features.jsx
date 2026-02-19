import { useLang } from '../contexts/LanguageContext';

const FEATURE_META = [
  { icon: 'psychology', iconColor: 'text-primary',        bgColor: 'bg-primary/10 group-hover:bg-primary/20',          highlight: false },
  { icon: 'hd',         iconColor: 'text-accent-purple',  bgColor: 'bg-accent-purple/10 group-hover:bg-accent-purple/20', highlight: true  },
  { icon: 'lock_open',  iconColor: 'text-blue-400',       bgColor: 'bg-blue-500/10 group-hover:bg-blue-500/20',          highlight: false },
];

export default function Features() {
  const { t } = useLang();

  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">{t.featuresTitle}</h2>
        <p className="text-gray-300 max-w-lg mx-auto leading-relaxed">{t.featuresSubtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {t.features.map((f, i) => {
          const meta = FEATURE_META[i];
          return (
            <div
              key={f.title}
              className={`glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group ${
                meta.highlight ? 'border-primary/20 shadow-[0_0_30px_rgba(30,216,241,0.1)]' : ''
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl ${meta.bgColor} flex items-center justify-center mb-6 transition-colors`}>
                <span className={`material-symbols-outlined ${meta.iconColor} text-3xl`}>{meta.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-loose">{f.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

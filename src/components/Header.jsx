import { useLang } from '../contexts/LanguageContext';

export default function Header() {
  const { t, toggle } = useLang();

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl animate-pulse">visibility</span>
            <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20"></div>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            DreamLens
          </h1>
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-gray-300 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined text-[16px]">translate</span>
          {t.langToggle}
        </button>
      </div>
    </header>
  );
}

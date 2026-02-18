import { useLang } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-background-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2 text-center">
        <p className="text-xs text-gray-600 leading-relaxed">{t.footerDisclaimer}</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gray-500">visibility</span>
          <span className="text-gray-500 font-semibold">DreamLens</span>
        </div>
        <div className="text-gray-600 text-sm">{t.footerCopy}</div>
        <div className="flex gap-6">
          {['Privacy', 'Terms'].map((link) => (
            <a key={link} className="text-gray-500 hover:text-white transition-colors" href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

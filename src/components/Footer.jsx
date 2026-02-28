import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-background-dark relative z-10">
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-4 text-center">
        <p className="text-xs text-gray-500 leading-loose">{t.footerDisclaimer}</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gray-400">visibility</span>
          <span className="text-gray-400 font-semibold">DreamLens</span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-gray-500">
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <a
            href={`mailto:${t.footerContactEmail}`}
            className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            {t.footerContact}
          </a>
        </nav>
        <div className="text-gray-500 text-sm">{t.footerCopy}</div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl animate-pulse">visibility</span>
            <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            DreamLens
          </span>
        </Link>
        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm text-gray-400">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link
            to="/#dream-input"
            className="bg-primary/10 border border-primary/30 text-primary font-semibold px-4 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
          >
            Analyze Dream
          </Link>
        </nav>
      </div>
    </header>
  );
}

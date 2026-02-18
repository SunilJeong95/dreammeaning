export default function Header() {
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

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Gallery', 'Features', 'Pricing'].map((item) => (
            <a key={item} className="nav-link" href="#">{item}</a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
            <span className="material-symbols-outlined text-[20px]">translate</span>
          </button>
          <button className="relative group overflow-hidden rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/50 px-6 py-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,216,241,0.4)]">
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-sm font-bold text-primary tracking-wide">Get Pro</span>
              <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </header>
  );
}

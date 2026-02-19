export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
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
      </div>
    </header>
  );
}

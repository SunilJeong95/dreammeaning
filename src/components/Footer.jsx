export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gray-500">visibility</span>
          <span className="text-gray-500 font-semibold">DreamLens</span>
        </div>
        <div className="text-gray-600 text-sm">© 2025 DreamLens AI. Sweet Dreams.</div>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Twitter'].map((link) => (
            <a key={link} className="text-gray-500 hover:text-white transition-colors" href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

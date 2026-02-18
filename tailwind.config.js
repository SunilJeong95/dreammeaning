/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1ed8f1",
        "primary-dim": "#158ca1",
        "primary-glow": "rgba(30, 216, 241, 0.5)",
        "background-dark": "#020617",
        "surface-dark": "#0f172a",
        "surface-glass": "rgba(30, 41, 59, 0.4)",
        "surface-glass-border": "rgba(255, 255, 255, 0.1)",
        "accent-purple": "#a855f7",
        "accent-amber": "#f59e0b",
      },
      fontFamily: {
        "display": ["Space Grotesk", "Inter", "sans-serif"],
        "body": ["Noto Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        'mystical-gradient': 'radial-gradient(circle at 50% 0%, rgba(30, 216, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, rgba(15, 23, 42, 0) 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'grid-pattern': 'radial-gradient(rgba(30, 216, 241, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(30, 216, 241, 0.5), 0 0 20px rgba(30, 216, 241, 0.3)',
        'glow': '0 0 15px rgba(168, 85, 247, 0.4)',
      },
    },
  },
  plugins: [],
}

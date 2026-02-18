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
        "primary-glow": "rgba(30, 216, 241, 0.5)",
        "background-dark": "#0F172A",
        "surface-glass": "rgba(30, 41, 59, 0.4)",
        "surface-glass-border": "rgba(255, 255, 255, 0.1)",
        "accent-purple": "#8B5CF6",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'mystical-gradient': 'radial-gradient(circle at 50% 0%, rgba(30, 216, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, rgba(15, 23, 42, 0) 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}

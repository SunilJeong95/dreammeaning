import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeDream, generateDreamImage } from '../services/gemini';
import { useLang } from '../contexts/LanguageContext';

export default function Hero() {
  const [dream, setDream] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useLang();

  async function handleAnalyze() {
    if (!dream.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const analysis = await analyzeDream(dream);

      // Use the LLM-generated imagePrompt for visual alignment; fall back to raw dream text
      const imageUrl = await generateDreamImage(analysis.imagePrompt ?? dream).catch(() => null);

      sessionStorage.removeItem('dreamlens_unlocked');
      sessionStorage.setItem('dreamlens_last_result', JSON.stringify({ result: analysis, imageUrl }));

      navigate('/result', {
        state: {
          result: analysis,
          imageUrl,
        },
      });
    } catch (e) {
      setError(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="dream-input" className="max-w-4xl mx-auto px-4 text-center mb-24 relative">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-8 uppercase">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        {t.badge}
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent-purple drop-shadow-[0_0_15px_rgba(30,216,241,0.3)]">
          {t.heroLine1}
        </span>
        <br />
        <span className="text-white drop-shadow-md">{t.heroLine2}</span>
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-12 leading-relaxed">
        {t.heroDesc}
      </p>

      {/* Input */}
      <div className="relative group max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-purple rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-background-dark/80 backdrop-blur-xl border border-white/10 rounded-3xl p-2 input-focus-ring transition-all duration-300">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 relative">
              <div className="absolute top-4 left-4 text-primary/50">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <textarea
                value={dream}
                onChange={(e) => setDream(e.target.value)}
                className="w-full h-32 md:h-16 bg-transparent border-0 text-white placeholder-gray-500 focus:ring-0 pl-12 pr-4 py-4 text-base resize-none outline-none"
                placeholder={t.placeholder}
              />
            </div>
            <div className="p-2 flex items-center justify-end">
              <button
                onClick={handleAnalyze}
                disabled={loading || !dream.trim()}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-[#34e3fb] disabled:opacity-50 disabled:cursor-not-allowed text-background-dark font-bold py-3 px-6 rounded-2xl shadow-[0_0_20px_rgba(30,216,241,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin"></span>
                    <span>{t.analyzing}</span>
                  </>
                ) : (
                  <>
                    <span>{t.analyzeBtn}</span>
                    <span className="material-symbols-outlined text-[20px]">draw</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          {t.privacy}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 max-w-2xl mx-auto px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}
    </section>
  );
}

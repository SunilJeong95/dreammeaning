import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams, Navigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { useLang } from '../contexts/LanguageContext';
import ShareCard from '../components/ShareCard';
import { createCheckout, verifyCheckout, PRODUCT_IDS } from '../services/polar';

const DREAM_TYPE_GRADIENT = {
  Lucid:     'from-[#1ed8f1]/20 via-[#a855f7]/10 to-[#020617]',
  Nightmare: 'from-red-900/40 via-[#a855f7]/20 to-[#020617]',
  Recurring: 'from-amber-600/20 via-[#1ed8f1]/10 to-[#020617]',
  Abstract:  'from-[#a855f7]/20 via-blue-600/10 to-[#020617]',
  Prophetic: 'from-amber-500/20 via-[#1ed8f1]/10 to-[#020617]',
};

const DREAM_TYPE_ICON = {
  Lucid:     'self_improvement',
  Nightmare: 'nightlight',
  Recurring: 'replay',
  Abstract:  'blur_on',
  Prophetic: 'visibility',
};

const EMOTION_BG   = ['bg-[#a855f7]', 'bg-[#1ed8f1]', 'bg-[#f59e0b]'];
const EMOTION_TEXT = ['text-[#a855f7]', 'text-[#1ed8f1]', 'text-[#f59e0b]'];

const COLOR_MAP = {
  red:    { text: 'text-red-400',    dot: 'bg-red-500',    glow: 'bg-red-500/10',    shadow: '0 0 10px rgba(239,68,68,0.5)'    },
  blue:   { text: 'text-blue-400',   dot: 'bg-blue-500',   glow: 'bg-blue-500/10',   shadow: '0 0 10px rgba(59,130,246,0.5)'   },
  green:  { text: 'text-green-400',  dot: 'bg-green-500',  glow: 'bg-green-500/10',  shadow: '0 0 10px rgba(34,197,94,0.5)'    },
  purple: { text: 'text-purple-400', dot: 'bg-purple-500', glow: 'bg-purple-500/10', shadow: '0 0 10px rgba(168,85,247,0.5)'   },
  gold:   { text: 'text-amber-400',  dot: 'bg-amber-500',  glow: 'bg-amber-500/10',  shadow: '0 0 10px rgba(245,158,11,0.5)'  },
  amber:  { text: 'text-amber-400',  dot: 'bg-amber-500',  glow: 'bg-amber-500/10',  shadow: '0 0 10px rgba(245,158,11,0.5)'  },
  cyan:   { text: 'text-[#1ed8f1]',  dot: 'bg-[#1ed8f1]',  glow: 'bg-[#1ed8f1]/10',  shadow: '0 0 10px rgba(30,216,241,0.5)'  },
  white:  { text: 'text-slate-200',  dot: 'bg-slate-300',  glow: 'bg-slate-400/10',  shadow: '0 0 10px rgba(226,232,240,0.3)' },
  pink:   { text: 'text-pink-400',   dot: 'bg-pink-500',   glow: 'bg-pink-500/10',   shadow: '0 0 10px rgba(236,72,153,0.5)'  },
};

function getColorStyle(colorName = '') {
  const lower = colorName.toLowerCase();
  for (const key of Object.keys(COLOR_MAP)) {
    if (lower.includes(key)) return COLOR_MAP[key];
  }
  return COLOR_MAP.cyan;
}

const CORNERS = [[50,8],[92,38],[76,92],[24,92],[8,38]];
const CENTER  = [50, 50];

const RADAR_ANCHORS = [
  { textAnchor: 'middle', x: '50',  y: '3'   },
  { textAnchor: 'start',  x: '94',  y: '39'  },
  { textAnchor: 'middle', x: '78',  y: '100' },
  { textAnchor: 'middle', x: '22',  y: '100' },
  { textAnchor: 'end',    x: '6',   y: '39'  },
];

function radarPoints(metrics) {
  const vals = [
    (metrics?.fortune    ?? 50) / 100,
    (metrics?.creativity ?? 50) / 100,
    (metrics?.stress     ?? 50) / 100,
    (metrics?.realism    ?? 50) / 100,
    (metrics?.nightmare  ?? 50) / 100,
  ];
  return CORNERS.map(([cx, cy], i) =>
    `${CENTER[0] + vals[i] * (cx - CENTER[0])},${CENTER[1] + vals[i] * (cy - CENTER[1])}`
  ).join(' ');
}

export default function ResultPage() {
  const { state }        = useLocation();
  const navigate         = useNavigate();
  const [searchParams]   = useSearchParams();
  const { t }            = useLang();
  const [tab, setTab]    = useState('psychology');
  const [isSharing,    setIsSharing]    = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isVerifying,  setIsVerifying]  = useState(false);
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('dreamlens_unlocked') === 'true'
  );
  const shareCardRef = useRef(null);

  const checkoutId = searchParams.get('checkout_id');

  // Verify payment after Polar redirect
  useEffect(() => {
    if (!checkoutId || unlocked) return;
    setIsVerifying(true);
    verifyCheckout(checkoutId)
      .then((ok) => {
        if (ok) {
          sessionStorage.setItem('dreamlens_unlocked', 'true');
          setUnlocked(true);
        }
      })
      .catch(() => { /* silent — show paywall */ })
      .finally(() => setIsVerifying(false));
  }, [checkoutId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Restore result from router state or sessionStorage (after Polar redirect)
  const savedData = (() => {
    if (state?.result) return { result: state.result, imageUrl: state.imageUrl ?? null };
    try {
      const raw = sessionStorage.getItem('dreamlens_last_result');
      if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
    return null;
  })();

  async function captureCard() {
    return html2canvas(shareCardRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: '#020617',
      logging: false,
    });
  }

  function downloadBlob(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dream-analysis.png';
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleShare() {
    if (!unlocked) { createCheckout(PRODUCT_IDS.single); return; }
    if (isSharing || isDownloading || !shareCardRef.current) return;
    setIsSharing(true);
    try {
      const canvas = await captureCard();
      canvas.toBlob(async (blob) => {
        if (!blob) { setIsSharing(false); return; }
        const file = new File([blob], 'dream-analysis.png', { type: 'image/png' });
        try {
          if (navigator.canShare?.({ files: [file] })) {
            await navigator.share({ files: [file], title: savedData.result.title });
          } else {
            downloadBlob(blob);
          }
        } catch {
          // user cancelled share — no-op
        } finally {
          setIsSharing(false);
        }
      }, 'image/png');
    } catch {
      setIsSharing(false);
    }
  }

  async function handleDownload() {
    if (!unlocked) { createCheckout(PRODUCT_IDS.single); return; }
    if (isSharing || isDownloading || !shareCardRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await captureCard();
      canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob);
        setIsDownloading(false);
      }, 'image/png');
    } catch {
      setIsDownloading(false);
    }
  }

  if (!savedData) return <Navigate to="/" replace />;

  const { result, imageUrl } = savedData;
  const gradient   = DREAM_TYPE_GRADIENT[result.dreamType] ?? DREAM_TYPE_GRADIENT.Abstract;
  const typeIcon   = DREAM_TYPE_ICON[result.dreamType]     ?? 'auto_awesome';
  const dataPoints = radarPoints(result.metrics);
  const colorStyle = getColorStyle(result.lucky?.color ?? '');

  const words = (result.title ?? '').split(' ');
  const plain = words.slice(0, Math.max(0, words.length - 2)).join(' ');
  const grad  = words.slice(Math.max(0, words.length - 2)).join(' ');

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center items-start py-6 px-4 font-display">

      {/* Background glows */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1ed8f1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Mobile card */}
      <div className="w-full max-w-[450px] flex flex-col shadow-2xl rounded-[2.5rem] bg-[#020617] border border-slate-800 ring-1 ring-white/5 overflow-hidden">

        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/50">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors text-slate-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-sm font-bold uppercase tracking-widest text-slate-300">{t.resultTitle}</h1>
          <div className="flex items-center gap-1">
            <button
              onClick={handleDownload}
              disabled={isSharing || isDownloading}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors text-slate-300 disabled:opacity-50"
              title={t.downloadBtn}
            >
              {isDownloading
                ? <span className="material-symbols-outlined animate-spin text-[#1ed8f1]">progress_activity</span>
                : <span className="material-symbols-outlined">download</span>
              }
            </button>
            <button
              onClick={handleShare}
              disabled={isSharing || isDownloading}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors text-slate-300 disabled:opacity-50"
              title={t.shareBtn}
            >
              {isSharing
                ? <span className="material-symbols-outlined animate-spin text-[#1ed8f1]">progress_activity</span>
                : <span className="material-symbols-outlined">ios_share</span>
              }
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex flex-col p-6 gap-8">

          {/* Hero */}
          <section className="flex flex-col gap-6">
            <div className={`relative w-full aspect-square rounded-2xl overflow-hidden border border-[#1ed8f1]/30 shadow-neon ${!imageUrl ? `bg-gradient-to-br ${gradient}` : ''}`}>
              {imageUrl ? (
                <img src={imageUrl} alt={result.title} className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1ed8f1]/15 text-[140px]">{typeIcon}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#1ed8f1]/20 text-[#1ed8f1] rounded border border-[#1ed8f1]/30 backdrop-blur-sm">
                  {result.dreamType} Type
                </span>
              </div>
            </div>

            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold leading-tight text-white tracking-tight">
                {plain && <span>{plain} </span>}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1ed8f1] to-[#a855f7]">{grad}</span>
              </h2>
              <p className="text-slate-400 text-sm font-body italic leading-relaxed">
                "{result.summary}"
              </p>
            </div>
          </section>

          {/* Tabs */}
          <div className="flex p-1 bg-surface-dark rounded-full border border-slate-800 relative">
            <div className={`w-1/2 h-full absolute top-0 bg-[#1ed8f1]/10 rounded-full transition-all duration-300 ${tab === 'fortune' ? 'left-1/2' : 'left-0'}`} />
            <button
              onClick={() => setTab('psychology')}
              className={`flex-1 py-2 text-sm font-bold text-center rounded-full relative z-10 transition-colors ${tab === 'psychology' ? 'text-[#1ed8f1]' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {t.tabPsychology}
            </button>
            <button
              onClick={() => setTab('fortune')}
              className={`flex-1 py-2 text-sm font-bold text-center rounded-full relative z-10 transition-colors ${tab === 'fortune' ? 'text-[#1ed8f1]' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {t.tabFortune}
            </button>
          </div>

          {tab === 'psychology' ? (
            <>
              {/* Dream Metrics */}
              <section className="glass-panel rounded-2xl p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-200">{t.metricsTitle}</h3>
                  <span className="text-xs text-[#1ed8f1] bg-[#1ed8f1]/10 px-2 py-1 rounded">{t.metricsResonance}</span>
                </div>

                {/* Radar Chart */}
                <div className="relative w-full h-52 flex items-center justify-center">
                  <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 100 100">
                    <polygon fill="none" points="50,8 92,38 76,92 24,92 8,38" stroke="#1e293b" strokeDasharray="2 2" strokeWidth="0.6" />
                    <polygon fill="none" points="50,29 71,44 63,71 37,71 29,44" stroke="#1e293b" strokeWidth="0.6" />
                    {CORNERS.map(([cx, cy], i) => (
                      <line key={i} x1="50" y1="50" x2={cx} y2={cy} stroke="#1e293b" strokeWidth="0.4" />
                    ))}
                    <polygon
                      fill="rgba(30,216,241,0.15)"
                      points={dataPoints}
                      stroke="#1ed8f1"
                      strokeWidth="1.5"
                      style={{ filter: 'drop-shadow(0 0 6px rgba(30,216,241,0.5))' }}
                    />
                    {RADAR_ANCHORS.map((a, i) => (
                      <text key={i} fill="#64748b" fontSize="5.5" textAnchor={a.textAnchor} x={a.x} y={a.y}>
                        {t.radarLabels[i]}
                      </text>
                    ))}
                  </svg>
                </div>

                {/* Emotional Spectrum */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-slate-400">
                    <span>{t.emotionalSpectrum}</span>
                    <span>{t.emotionalMixed}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    {result.emotions?.map((e, i) => (
                      <div key={i} className={EMOTION_BG[i] ?? 'bg-[#1ed8f1]'} style={{ width: `${e.value}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    {result.emotions?.map((e, i) => (
                      <span key={i} className={EMOTION_TEXT[i] ?? 'text-[#1ed8f1]'}>
                        {e.name} {e.value}%
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Deep Analysis — locked behind paywall */}
              <section className="rounded-2xl border border-slate-800 bg-surface-dark p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#f59e0b]">psychology</span>
                  <h3 className="text-lg font-bold text-white">{t.deepTitle}</h3>
                </div>

                {unlocked ? (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">{result.interpretation}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{result.deepAnalysis}</p>
                  </div>
                ) : (
                  <div>
                    {/* Teaser — first ~3 lines visible */}
                    <div className="relative overflow-hidden" style={{ maxHeight: '4.5rem' }}>
                      <p className="text-sm text-slate-300 leading-relaxed">{result.interpretation}</p>
                      {/* Fade-out gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-dark to-transparent" />
                    </div>

                    {/* Blurred remainder */}
                    <div
                      className="mt-2 space-y-3 select-none pointer-events-none"
                      style={{ filter: 'blur(4px)' }}
                    >
                      <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{result.deepAnalysis}</p>
                    </div>

                    {/* Unlock CTA */}
                    <div className="mt-5 flex flex-col items-center gap-2 pt-4 border-t border-slate-800/60">
                      <span className="material-symbols-outlined text-[#f59e0b] text-3xl">lock</span>
                      <p className="text-xs text-slate-400 text-center max-w-[220px] leading-relaxed">{t.unlockDesc}</p>
                      <button
                        onClick={() => createCheckout(PRODUCT_IDS.single)}
                        disabled={isVerifying}
                        className="mt-1 px-6 py-2.5 rounded-full bg-[#1ed8f1] text-[#020617] font-black text-sm hover:bg-[#34e3fb] transition-all shadow-lg shadow-[#1ed8f1]/20 disabled:opacity-50"
                      >
                        {isVerifying ? t.verifying : t.unlockBtn}
                      </button>
                    </div>
                  </div>
                )}
              </section>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-600 text-center leading-relaxed px-2">
                {t.resultDisclaimer}
              </p>

              {/* Daily Advice */}
              <div className="rounded-2xl border border-slate-800 bg-surface-dark p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#1ed8f1]">auto_awesome</span>
                  <h3 className="text-lg font-bold text-white">{t.adviceTitle}</h3>
                </div>

                {unlocked ? (
                  <p className="text-sm text-slate-300 leading-relaxed">{result.advice}</p>
                ) : (
                  <div>
                    {/* Teaser */}
                    <div className="relative overflow-hidden" style={{ maxHeight: '1.5rem' }}>
                      <p className="text-sm text-slate-300 leading-relaxed">{result.advice}</p>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-dark to-transparent" />
                    </div>

                    {/* Blurred remainder */}
                    <div
                      className="mt-2 select-none pointer-events-none"
                      style={{ filter: 'blur(4px)' }}
                    >
                      <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{result.advice}</p>
                    </div>

                    {/* Unlock CTA */}
                    <div className="mt-5 flex flex-col items-center gap-2 pt-4 border-t border-slate-800/60">
                      <span className="material-symbols-outlined text-[#f59e0b] text-3xl">lock</span>
                      <p className="text-xs text-slate-400 text-center max-w-[220px] leading-relaxed">{t.unlockDesc}</p>
                      <button
                        onClick={() => createCheckout(PRODUCT_IDS.single)}
                        disabled={isVerifying}
                        className="mt-1 px-6 py-2.5 rounded-full bg-[#1ed8f1] text-[#020617] font-black text-sm hover:bg-[#34e3fb] transition-all shadow-lg shadow-[#1ed8f1]/20 disabled:opacity-50"
                      >
                        {isVerifying ? t.verifying : t.unlockBtn}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Fortune Tab */
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200 px-1">{t.luckyTitle}</h3>
              <p className="text-[11px] text-slate-600 px-1">{t.luckyDisclaimer}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-dark border border-slate-800 p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#1ed8f1]/10 rounded-full blur-xl group-hover:bg-[#1ed8f1]/20 transition-all" />
                  <span className="text-slate-400 text-xs font-medium uppercase">{t.labelNumber}</span>
                  <div className="text-3xl font-bold text-white">{result.lucky?.number ?? '07'}</div>
                  <span className="material-symbols-outlined absolute bottom-4 right-4 text-slate-700">123</span>
                </div>

                <div className="bg-surface-dark border border-slate-800 p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
                  <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl transition-all ${colorStyle.glow}`} />
                  <span className="text-slate-400 text-xs font-medium uppercase">{t.labelColor}</span>
                  <div className={`text-xl font-bold ${colorStyle.text}`}>{result.lucky?.color ?? 'Deep Blue'}</div>
                  <div className={`w-4 h-4 rounded-full absolute bottom-4 right-4 ${colorStyle.dot}`} style={{ boxShadow: colorStyle.shadow }} />
                </div>

                <div className="bg-surface-dark border border-slate-800 p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all" />
                  <span className="text-slate-400 text-xs font-medium uppercase">{t.labelDirection}</span>
                  <div className="text-xl font-bold text-white">{result.lucky?.direction ?? 'East'}</div>
                  <span className="material-symbols-outlined absolute bottom-4 right-4 text-slate-700">explore</span>
                </div>

                <div className="bg-surface-dark border border-slate-800 p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />
                  <span className="text-slate-400 text-xs font-medium uppercase">{t.labelTotem}</span>
                  <div className="text-xl font-bold text-white">{result.lucky?.totem ?? 'Owl'}</div>
                  <span className="material-symbols-outlined absolute bottom-4 right-4 text-slate-700">pets</span>
                </div>
              </div>
            </section>
          )}

        </main>
      </div>
      <ShareCard ref={shareCardRef} result={result} imageUrl={imageUrl} t={t} />
    </div>
  );
}

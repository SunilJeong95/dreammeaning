import { forwardRef } from 'react';

const DREAM_TYPE_GRADIENT = {
  Lucid:     ['#0e7490', '#4c1d95'],
  Nightmare: ['#7f1d1d', '#4c1d95'],
  Recurring: ['#78350f', '#164e63'],
  Abstract:  ['#4c1d95', '#1e3a8a'],
  Prophetic: ['#78350f', '#164e63'],
};

const EMOTION_COLORS = ['#a855f7', '#1ed8f1', '#f59e0b'];

const METRIC_KEYS   = ['fortune', 'creativity', 'stress', 'realism', 'nightmare'];
const METRIC_COLORS = {
  fortune:    '#1ed8f1',
  creativity: '#a855f7',
  stress:     '#f59e0b',
  realism:    '#4ade80',
  nightmare:  '#f87171',
};

const COLOR_HEX = {
  red:    '#f87171',
  blue:   '#60a5fa',
  green:  '#4ade80',
  purple: '#c084fc',
  gold:   '#fbbf24',
  amber:  '#fbbf24',
  cyan:   '#1ed8f1',
  white:  '#e2e8f0',
  pink:   '#f472b6',
};

function resolveColor(colorName = '') {
  const lower = colorName.toLowerCase();
  for (const key of Object.keys(COLOR_HEX)) {
    if (lower.includes(key)) return COLOR_HEX[key];
  }
  return COLOR_HEX.cyan;
}

/* ── divider ─────────────────────────────────────────────── */
function Divider() {
  return (
    <div style={{ height: '1px', background: '#1e293b', margin: '0 24px' }} />
  );
}

/* ── section label ───────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#475569',
      marginBottom: '10px',
    }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ShareCard
═══════════════════════════════════════════════════════════ */
const ShareCard = forwardRef(function ShareCard({ result, imageUrl, t }, ref) {
  if (!result) return null;

  const gradColors = DREAM_TYPE_GRADIENT[result.dreamType] ?? DREAM_TYPE_GRADIENT.Abstract;
  const luckyColor = resolveColor(result.lucky?.color ?? '');
  const emotions   = result.emotions ?? [];
  const metrics    = result.metrics  ?? {};
  const lucky      = result.lucky    ?? {};

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: '0px',
        width: '420px',
        background: '#020617',
        borderRadius: '0px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        color: '#e2e8f0',
        boxSizing: 'border-box',
      }}
    >

      {/* ── Top bar ──────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px 16px',
        borderBottom: '1px solid #1e293b',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '18px', lineHeight: 1 }}>◈</span>
          <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.06em', color: '#e2e8f0' }}>
            DreamLens
          </span>
        </div>
        <span style={{
          fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', padding: '4px 10px',
          border: '1px solid rgba(30,216,241,0.4)', borderRadius: '999px',
          color: '#1ed8f1', background: 'rgba(30,216,241,0.08)',
        }}>
          {result.dreamType ?? 'Dream'} Type
        </span>
      </div>

      {/* ── Image ────────────────────────────────────────── */}
      <div style={{
        width: '100%', height: '200px', position: 'relative', flexShrink: 0,
        background: imageUrl
          ? 'transparent'
          : `linear-gradient(135deg, ${gradColors[0]}, ${gradColors[1]}, #020617)`,
        overflow: 'hidden',
      }}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            crossOrigin="anonymous"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, #020617 100%)',
        }} />
      </div>

      {/* ── Title + Summary ──────────────────────────────── */}
      <div style={{ padding: '18px 24px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3, color: '#f1f5f9', marginBottom: '8px' }}>
          {result.title ?? ''}
        </div>
        <div style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.6 }}>
          "{result.summary ?? ''}"
        </div>
      </div>

      <Divider />

      {/* ── Emotional Spectrum ───────────────────────────── */}
      <div style={{ padding: '16px 24px' }}>
        <SectionLabel>{t?.emotionalSpectrum ?? 'Emotional Spectrum'}</SectionLabel>
        <div style={{
          height: '10px', borderRadius: '999px', overflow: 'hidden',
          display: 'flex', background: '#1e293b',
        }}>
          {emotions.map((e, i) => (
            <div key={i} style={{
              width: `${e.value}%`, height: '100%',
              background: EMOTION_COLORS[i] ?? '#1ed8f1',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
          {emotions.map((e, i) => (
            <span key={i} style={{
              fontSize: '10px', fontWeight: 600,
              color: EMOTION_COLORS[i] ?? '#1ed8f1',
              fontFamily: 'monospace',
            }}>
              {e.name} {e.value}%
            </span>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── Dream Metrics ────────────────────────────────── */}
      <div style={{ padding: '16px 24px' }}>
        <SectionLabel>{t?.metricsTitle ?? 'Dream Metrics'}</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {METRIC_KEYS.map((key, i) => {
            const val = metrics[key] ?? 50;
            const label = t?.radarLabels?.[i] ?? key;
            const color = METRIC_COLORS[key];
            return (
              <div key={key}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'capitalize' }}>{label}</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, color, fontFamily: 'monospace' }}>{val}%</span>
                </div>
                <div style={{ height: '5px', background: '#1e293b', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: `${val}%`, height: '100%', background: color, borderRadius: '999px' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Divider />

      {/* ── Deep Analysis ────────────────────────────────── */}
      {(result.interpretation || result.deepAnalysis) && (
        <>
          <div style={{ padding: '16px 24px' }}>
            <SectionLabel>{t?.deepTitle ?? 'Deep Analysis'}</SectionLabel>
            {result.interpretation && (
              <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: 1.7, margin: '0 0 10px' }}>
                {result.interpretation}
              </p>
            )}
            {result.deepAnalysis && (
              <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.7, margin: 0 }}>
                {result.deepAnalysis}
              </p>
            )}
          </div>
          <Divider />
        </>
      )}

      {/* ── Lucky Signifiers ─────────────────────────────── */}
      <div style={{ padding: '16px 24px' }}>
        <SectionLabel>{t?.luckyTitle ?? 'Lucky Signifiers'}</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>

          {/* Number */}
          <div style={{
            background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px',
            padding: '12px 14px',
          }}>
            <div style={{ fontSize: '9px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              {t?.labelNumber ?? 'Number'}
            </div>
            <div style={{ fontSize: '26px', fontWeight: 700, color: '#f1f5f9' }}>{lucky.number ?? '07'}</div>
          </div>

          {/* Color */}
          <div style={{
            background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px',
            padding: '12px 14px', position: 'relative',
          }}>
            <div style={{ fontSize: '9px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              {t?.labelColor ?? 'Color'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: luckyColor }}>{lucky.color ?? 'Blue'}</div>
            <div style={{
              position: 'absolute', bottom: '12px', right: '14px',
              width: '14px', height: '14px', borderRadius: '50%', background: luckyColor,
            }} />
          </div>

          {/* Direction */}
          <div style={{
            background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px',
            padding: '12px 14px',
          }}>
            <div style={{ fontSize: '9px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              {t?.labelDirection ?? 'Direction'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#f1f5f9' }}>{lucky.direction ?? 'East'}</div>
          </div>

          {/* Totem */}
          <div style={{
            background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px',
            padding: '12px 14px',
          }}>
            <div style={{ fontSize: '9px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              {t?.labelTotem ?? 'Totem'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#f1f5f9' }}>{lucky.totem ?? 'Owl'}</div>
          </div>

        </div>
      </div>

      <Divider />

      {/* ── Daily Advice ─────────────────────────────────── */}
      {result.advice && (
        <div style={{
          margin: '16px 24px',
          background: 'linear-gradient(135deg, #0f172a, #162032)',
          border: '1px solid #334155', borderRadius: '12px',
          padding: '14px 16px',
        }}>
          <div style={{
            fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.12em', color: '#1ed8f1', marginBottom: '8px',
          }}>
            ✦ {t?.adviceTitle ?? 'Daily Advice'}
          </div>
          <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.7 }}>
            {result.advice}
          </div>
        </div>
      )}

      {/* ── Watermark ────────────────────────────────────── */}
      <div style={{
        padding: '14px 24px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid #1e293b', marginTop: '4px',
      }}>
        <span style={{ fontSize: '10px', color: '#334155' }}>
          {t?.shareWatermark ?? 'Analyzed by DreamLens AI'}
        </span>
        <span style={{ fontSize: '10px', color: '#475569', letterSpacing: '0.05em' }}>
          dreameaning.com
        </span>
      </div>

    </div>
  );
});

export default ShareCard;

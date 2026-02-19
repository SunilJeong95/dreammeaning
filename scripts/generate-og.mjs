import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FONT_DIR = '/nix/store/fqyhsm4129c9sh1sjjyrqky983haz1d5-liberation-fonts-2.1.0/share/fonts/truetype';
GlobalFonts.registerFromPath(`${FONT_DIR}/LiberationSans-Regular.ttf`,    'LS');
GlobalFonts.registerFromPath(`${FONT_DIR}/LiberationSans-Bold.ttf`,       'LS');
GlobalFonts.registerFromPath(`${FONT_DIR}/LiberationSans-Italic.ttf`,     'LS');

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// ── Background ──────────────────────────────────────────────────────────────
ctx.fillStyle = '#020617';
ctx.fillRect(0, 0, W, H);

// Cyan glow top-center
const g1 = ctx.createRadialGradient(600, 80, 0, 600, 80, 500);
g1.addColorStop(0, 'rgba(30,216,241,0.22)');
g1.addColorStop(1, 'rgba(2,6,23,0)');
ctx.fillStyle = g1;
ctx.fillRect(0, 0, W, H);

// Purple glow bottom-right
const g2 = ctx.createRadialGradient(980, 500, 0, 980, 500, 400);
g2.addColorStop(0, 'rgba(168,85,247,0.18)');
g2.addColorStop(1, 'rgba(2,6,23,0)');
ctx.fillStyle = g2;
ctx.fillRect(0, 0, W, H);

// Blue glow bottom-left
const g3 = ctx.createRadialGradient(150, 500, 0, 150, 500, 300);
g3.addColorStop(0, 'rgba(59,130,246,0.13)');
g3.addColorStop(1, 'rgba(2,6,23,0)');
ctx.fillStyle = g3;
ctx.fillRect(0, 0, W, H);

// ── Border frame ────────────────────────────────────────────────────────────
ctx.strokeStyle = '#1e293b';
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.roundRect(40, 40, W - 80, H - 80, 24);
ctx.stroke();

// Top cyan accent bar
ctx.strokeStyle = 'rgba(30,216,241,0.7)';
ctx.lineWidth = 2.5;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(510, 40);
ctx.lineTo(690, 40);
ctx.stroke();

// ── Logo — eye/lens ──────────────────────────────────────────────────────────
const EX = 148, EY = 108;
ctx.strokeStyle = '#1ed8f1';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.ellipse(EX, EY, 36, 25, 0, 0, Math.PI * 2);
ctx.stroke();

// Pupil
ctx.fillStyle = '#1ed8f1';
ctx.beginPath();
ctx.arc(EX, EY, 10, 0, Math.PI * 2);
ctx.fill();

// Glint
ctx.fillStyle = 'rgba(255,255,255,0.5)';
ctx.beginPath();
ctx.arc(EX + 5, EY - 5, 3.5, 0, Math.PI * 2);
ctx.fill();

// ── Brand name ───────────────────────────────────────────────────────────────
ctx.font = 'bold 36px LS';
ctx.fillStyle = '#ffffff';
ctx.fillText('DreamLens', 198, 118);

// Badge background
ctx.fillStyle = 'rgba(30,216,241,0.1)';
ctx.strokeStyle = 'rgba(30,216,241,0.35)';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.roundRect(198, 132, 148, 26, 13);
ctx.fill();
ctx.stroke();

ctx.font = 'bold 11px LS';
ctx.fillStyle = '#1ed8f1';
ctx.textAlign = 'center';
ctx.fillText('AI DREAM ANALYSIS', 272, 150);

// ── Main headline ─────────────────────────────────────────────────────────────
ctx.textAlign = 'center';
ctx.font = 'bold 88px LS';
ctx.fillStyle = '#ffffff';
ctx.fillText('Decode Your', W / 2, 290);

ctx.fillStyle = '#1ed8f1';
ctx.fillText('Dreams.', W / 2, 388);

// ── Subtext ──────────────────────────────────────────────────────────────────
ctx.font = '24px LS';
ctx.fillStyle = '#94a3b8';
ctx.fillText('Jungian  ·  Freudian  ·  AI-Generated Dream Imagery', W / 2, 448);

// ── Price pill ───────────────────────────────────────────────────────────────
ctx.fillStyle = '#1ed8f1';
ctx.beginPath();
ctx.roundRect(498, 488, 204, 54, 27);
ctx.fill();

ctx.font = 'bold 22px LS';
ctx.fillStyle = '#020617';
ctx.fillText('$0.99 per dream', W / 2, 524);

// ── URL watermark ────────────────────────────────────────────────────────────
ctx.font = '18px LS';
ctx.fillStyle = '#475569';
ctx.fillText('dreamlens.page', W / 2, 574);

// ── Save ─────────────────────────────────────────────────────────────────────
const outputPath = join(__dirname, '../public/og-image.png');
const pngBuffer = canvas.toBuffer('image/png');
writeFileSync(outputPath, pngBuffer);
console.log('✓ og-image.png generated');

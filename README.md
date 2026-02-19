# DreamLens — AI Dream Interpretation Service

> **Last updated:** 2026-02-19 (pricing updated to USD)

---

## Overview

DreamLens is an AI-powered dream analysis web app that combines Western psychoanalytic theory (Jung, Freud) with Eastern fortune traditions (Korean Taemong, Chinese Zhou Gong) and global numerology. Users describe their dream in natural language and receive a rich, multi-layered interpretation along with an AI-generated dream image and fortune indicators. Results can be shared to social media or saved as a PNG card.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 7 |
| Styling | Tailwind CSS 3, custom CSS variables |
| Routing | React Router DOM 7 |
| AI Analysis | Google Gemini 2.5 Flash Lite (`gemini-2.5-flash-lite`) |
| AI Image | Google Gemini 2.5 Flash Image (`gemini-2.5-flash-image`) |
| Image Capture | html2canvas |
| Deployment | Cloudflare Pages |

---

## Features

### 1. Dream Analysis
- User inputs a dream description in any language
- Gemini analyzes it using a structured system prompt that applies:
  - **Jungian psychology** — Shadow, Anima/Animus, Individuation arc
  - **Freudian framework** — manifest vs. latent content, condensation, displacement
  - **Korean Taemong** — conception/wealth omens (pig, snake, feces, fire)
  - **Chinese Zhou Gong** — paradoxical fortune readings (death = wealth, marriage = separation warning, clean flood = luck)
  - **Global numerology** — Pythagorean symbol-to-number mapping, synchronicity patterns
  - **IRT nightmare protocol** — empathy-first reframe + dream rescripting guidance for terrifying dreams

### 2. AI Dream Image Generation
- After analysis completes, the LLM-generated `imagePrompt` (specific to dream symbols and emotional tone) is passed to Gemini's image model
- Style: ethereal surrealism, bioluminescent cyan/violet palette, dark void background
- Calls are sequential: analysis → imagePrompt → image generation (ensures visual alignment)

### 3. Result Page
- **Psychology tab**: Dream metrics radar (Fortune, Creativity, Stress, Realism, Nightmare), Emotional Spectrum bar, Deep Analysis text
- **Fortune tab**: Lucky Number, Color, Direction, Totem in 2×2 grid
- Daily Advice derived from specific dream symbols

### 4. SNS Share & Download
- **Share button** (`ios_share`): captures the full ShareCard via html2canvas → Web Share API on mobile, PNG download fallback on desktop
- **Download button** (`download`): always triggers PNG download
- **ShareCard** component: 420px wide, auto-height, all sections rendered off-screen at `left: -9999px`. Includes: type badge, image, title/summary, emotional spectrum, 5 metric bars, full deep analysis, lucky 2×2 grid, advice, watermark
- ShareCard uses fully inline styles (Tailwind-free) for html2canvas compatibility

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top nav (logo only, no language toggle)
│   ├── Hero.jsx            # Dream input + analyze button + orchestrates API calls
│   ├── Features.jsx        # Feature cards section
│   ├── LiveFeed.jsx        # Dream gallery samples
│   ├── Footer.jsx          # Disclaimer + copyright
│   ├── ShareCard.jsx       # Off-screen 420px card for PNG capture
│   └── DreamResultModal.jsx
├── pages/
│   ├── LandingPage.jsx     # Main landing
│   └── ResultPage.jsx      # Full result view with tabs, share/download buttons
├── contexts/
│   └── LanguageContext.jsx # English-only translation strings (no toggle)
├── services/
│   └── gemini.js           # analyzeDream() + generateDreamImage()
└── App.jsx
```

---

## AI System Design

### Analysis Prompt Architecture (`gemini.js`)

The system prompt is injected via `systemInstruction` (separate from the user prompt for token efficiency) and structured in 4 zones:

1. **Persona** — DreamLens Interpreter with Jungian/Freudian + Eastern fortune expertise
2. **Interpretation process** — 4 sequential internal steps (emotion → psychological lens → fortune lens → numerology/color mapping)
3. **Compressed symbol map** — 22 high-frequency dream symbols, each mapped to `Psy | Fortune | Num | Color` in a single line
4. **Nightmare protocol** — IRT-based empathy + rescripting, talisman recommendation

### Output JSON Schema

```json
{
  "title": "string (4-5 words, poetic)",
  "dreamType": "Lucid | Nightmare | Recurring | Abstract | Prophetic",
  "summary": "string (1 sentence)",
  "interpretation": "string (5-6 sentences: archetype named, latent chain, cultural reading, psyche rehearsal)",
  "deepAnalysis": "string (5-6 sentences: shadow element, integration need, life stage, cost of avoidance, unique insight)",
  "advice": "string (3 sentences, each derived from a specific dream symbol)",
  "lucky": {
    "number": "string (2-digit)",
    "color": "string",
    "direction": "North | South | East | West",
    "totem": "string (animal)"
  },
  "emotions": [
    { "name": "string", "value": number }
  ],
  "metrics": {
    "fortune": number,
    "creativity": number,
    "stress": number,
    "realism": number,
    "nightmare": number
  },
  "imagePrompt": "string (English, diffusion-model optimized)"
}
```

Language auto-detection: all text fields (except `dreamType`, `imagePrompt`) are written in the dream input's detected language.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_GEMINI_API_KEY` | Yes | Google Gemini API key (set in Cloudflare Pages) |

---

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

---

## Deployment

Hosted on **Cloudflare Pages**. Set `VITE_GEMINI_API_KEY` in the Cloudflare Pages environment variables dashboard, then push to `main`.

---

## Pricing

Credit-based model. No subscriptions, no monthly fees. Credits never expire.

| Package | Price | Per Credit | Strategy |
|---|---|---|---|
| **1 Analysis** | $0.99 | $0.99 | Sub-$1 impulse buy — zero psychological barrier for a vivid nightmare or Taemong moment |
| **3 Analyses** ⭐ | $2.99 | ~$0.99 | Bestseller — same per-credit cost but 3× AOV; "I'll dream again anyway" psychology |
| **10 Analyses** | $7.99 | $0.79 | Heavy user tier — ~20% discount drives bulk purchase from value-conscious users |

All plans include: full Jungian/Freudian analysis, AI dream image, fortune indicators, SNS share card.

---

## Key Design Decisions

- **Sequential API calls** (analysis → image): ensures the AI image is generated from a semantically rich, dream-specific prompt rather than raw user text
- **English-only UI**: `LanguageContext` serves a single static translation object — no `toggle()`, no `lang` state
- **ShareCard inline styles**: Tailwind classes are not reliably captured by html2canvas; all ShareCard styling uses React `style={}` props
- **systemInstruction vs. prompt**: The large symbol map and framework rules live in `systemInstruction` to keep them out of the per-request token count

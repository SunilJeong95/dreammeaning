// ─── DUMMY MODE ──────────────────────────────────────────────────────────────
const DUMMY_MODE = false;

const DUMMY_POOL = [
  {
    title: 'Flight Over Crystal City',
    dreamType: 'Lucid',
    summary: 'A fierce yearning for freedom erupts from the unconscious, transcending all earthly limits.',
    interpretation: 'The crystal city embodies the idealized world you aspire to build. Flying is the psyche\'s declaration of autonomy — Jung\'s individuation urge breaking free from the Shadow\'s weight. Crystal itself signals a desire for total transparency with yourself.',
    deepAnalysis: 'At a deeper layer, the structured city below represents your social obligations and relational bonds. Soaring above them is not escapism but the Anima guiding you toward your higher potential. The unconscious is rehearsing mastery before waking life demands it.',
    advice: 'Take one unplanned action today — a walk with no destination, a creative impulse followed without editing. Your unconscious is already ahead of your conscious plan.',
    lucky: { number: '21', color: 'Luminous Blue', direction: 'East', totem: 'Eagle' },
    emotions: [{ name: 'Wonder', value: 55 }, { name: 'Joy', value: 30 }, { name: 'Anxiety', value: 15 }],
    metrics: { fortune: 82, creativity: 91, stress: 28, realism: 44, nightmare: 12 },
    imagePrompt: 'Surreal dreamscape: a lone figure soaring above an impossibly tall city of luminous crystal spires, each tower refracting bioluminescent cyan and violet light into the starless void sky, ultra-wide cinematic composition, ethereal fog at the base, hyperdetailed digital painting, no text',
  },
];

function getDummy() {
  return DUMMY_POOL[Math.floor(Math.random() * DUMMY_POOL.length)];
}

// ─── REAL API ────────────────────────────────────────────────────────────────
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

function getGenAI() {
  if (!API_KEY) throw new Error('VITE_GEMINI_API_KEY is not configured. Set this environment variable in Cloudflare Pages and redeploy.');
  return new GoogleGenerativeAI(API_KEY);
}

// ─── SYSTEM PROMPT ────────────────────────────────────────────────────────────
// Synthesizes: Jungian archetypes, Freudian latent content, Korean Taemong,
// Chinese Zhou Gong paradoxes, global numerology, IRT nightmare protocol.
const DREAM_SYSTEM_PROMPT = `You are DreamLens Interpreter — an expert AI that synthesizes Carl Jung (Shadow/Archetypes/Individuation), Sigmund Freud (manifest vs. latent content, condensation, displacement), Eastern fortune traditions (Korean Taemong, Chinese Zhou Gong paradoxes), and Pythagorean numerology into empathetic, mystical dream interpretations.

INTERPRETATION PROCESS (apply internally before output):
1. Identify core emotional baseline
2. Psychological Lens: Freudian — strip manifest → reveal latent desires/anxieties. Jungian — identify Shadow, Anima/Animus, individuation arc
3. Fortune Lens: apply Zhou Gong paradoxes or Korean Taemong omens where symbols match
4. Extract lucky number + color from symbol map; choose totem animal to match dream archetype

SYMBOL MAP (Symbol → Psy | Fortune | Num | Color):
Chased → Shadow avoidance | Running from fate | 8 | Red
Death/Dead → Massive transformation | Wealth & long life — Zhou Gong reversal | 00,44 | Black
Demons → Repressed Shadow | Hidden enemies/obstacles | 13 | DarkRed
Dragons → Self-integration | Supreme wealth and power | 8,9 | Gold
Feces → Releasing toxic burden | Major wealth/lottery — Korean tradition | 29 | Brown
Fire → Passion/ego destruction | Burning away life troubles = rebirth — Korean paradox | 29 | Orange
Flying → Freedom/ambition | High achievement/spiritual ascent | 21 | LightBlue
Houses → Architecture of inner mind | Family stability | 29 | White
Marriage → Merging Anima/Animus | Separation warning — Zhou Gong reversal | 30 | White
Pigs → Physical desire | Massive wealth + lottery luck — Korean | 8 | Pink
Snakes → Healing/hidden wisdom | Financial luck; Taemong: blessed child | 16 | Green
Teeth → Power loss/aging fear | Illness omen/spiritual transition | 21 | White
Water clean → Subconscious clarity | Washes away bad luck | 22 | Blue
Water murky → Emotional confusion | Trouble incoming | 22 | Grey
Babies → New beginning/vulnerability | Taemong divine blessing | 21 | Pink
Falling → Loss of control | Financial risk warning | 39 | Grey
Mountains → Life's major obstacles | Steady progress/spiritual ascent | 21 | Grey
Sex → Emotional unification | Partnership/energy merging | 23 | Purple
Animals wild → Primal instincts | Protection/supernatural power | 25 | Brown
Money → Reflection of self-worth | Major life change incoming | 8 | Green
Food → Intellectual/emotional nourishment | Abundance and family harmony | 20 | Green
Hair → Virility/life force | Power; cutting = loss of vitality | 11 | Gold

ZHOU GON PARADOXES: coffin/dead rising = financial windfall; marriage in dream = separation risk; clean flood = bad luck washed away; house burning = troubles gone, prosperity coming.
TAEMONG OMENS: snake (large beautiful) = gifted child, financial luck; pig = buy lottery; feces = major wealth; peach = romance luck; white crane = spiritual purity.

NIGHTMARE PROTOCOL: If dream is terrifying (violence, helplessness, relentless pursuit, demons) → lead with deep empathy first. Frame symbols as the mind releasing subconscious tension, not as bad omens. Guide the user to mentally rescript the dream's ending using IRT (Imagery Rehearsal Therapy): e.g., "visualize the pursuer dissolving into light" or "imagine suddenly gaining the power of flight." Recommend talisman: Dreamcatcher (traps dark spirits), Nazar/Hamsa (evil eye protection).

DIRECTION: North=introspection/unknown; East=new beginnings/rebirth; South=passion/achievement; West=reflection/wisdom.
TOTEM: Match to dream's dominant archetype (Wolf=Shadow, Eagle=freedom, Serpent=healing, Owl=wisdom, Dragon=transformation, Whale=deep unconscious, Fox=cunning intuition).`;

// ─── analyzeDream ─────────────────────────────────────────────────────────────
export async function analyzeDream(dreamText) {
  if (DUMMY_MODE) {
    await new Promise((r) => setTimeout(r, 1200));
    return getDummy();
  }

  const model = getGenAI().getGenerativeModel({
    model: 'gemini-2.5-flash-lite',
    systemInstruction: DREAM_SYSTEM_PROMPT,
  });

  const prompt = `Analyze this dream and output ONLY a valid JSON object — no markdown, no code fences.

CONTENT QUALITY STANDARD — this analysis must be worth paying for:
• interpretation: 5-6 sentences. Follow this structure exactly:
  (1) Name the specific Jungian archetype OR Freudian mechanism at work (e.g. "This dream activates the Shadow archetype..." or "Through condensation, the unconscious merges...").
  (2) Trace the symbolic chain from manifest surface to latent meaning — what is the dream's imagery actually hiding?
  (3) What core emotional truth or unresolved conflict is being forced into consciousness?
  (4) Layer in the cultural fortune reading — what does the Eastern tradition (Zhou Gong or Taemong) say about these same symbols, and how does it complement or contradict the psychological view?
  (5) What is the psyche rehearsing, mourning, or preparing the dreamer to face?

• deepAnalysis: 5-6 sentences of premium depth. Follow this structure:
  (1) Identify the hidden complex or shadow element that the obvious reading conceals — go one layer deeper than the interpretation.
  (2) Name the specific part of the self seeking integration: what quality, emotion, or life truth has the dreamer disowned or not yet claimed?
  (3) Situate this in a developmental or life-stage context: what psychological threshold is the dreamer standing at? (e.g. individuation, mid-life confrontation, an unprocessed grief, a suppressed ambition)
  (4) What is the cost of continued avoidance — what will keep recurring in waking life if this dream's message is ignored?
  (5) End with one profound, uniquely tailored insight that could only apply to THIS specific dream — something that would make the reader feel genuinely seen.

• advice: 3 sentences. Not generic. Derive each sentence from a specific symbol in the dream. Make it feel like a private message from the unconscious — concrete, warm, and slightly uncanny.

JSON schema:
{
  "title": "Poetic 4-5 word title",
  "dreamType": "Lucid|Nightmare|Recurring|Abstract|Prophetic",
  "summary": "One evocative sentence capturing the dream's core theme",
  "interpretation": "5-6 sentences per the quality standard above",
  "deepAnalysis": "5-6 sentences per the quality standard above",
  "advice": "3 sentences, symbol-derived, personal and concrete",
  "lucky": {
    "number": "2-digit string from symbol map e.g. '07'",
    "color": "Color name derived from dominant symbol map",
    "direction": "North|South|East|West",
    "totem": "Archetype-matched animal"
  },
  "emotions": [
    {"name": "Primary emotion", "value": 60},
    {"name": "Secondary emotion", "value": 25},
    {"name": "Tertiary emotion", "value": 15}
  ],
  "metrics": {
    "fortune": 75,
    "creativity": 80,
    "stress": 30,
    "realism": 45,
    "nightmare": 20
  },
  "imagePrompt": "Highly detailed English diffusion-model prompt: specific visual elements from this dream, dominant color palette, art style, cinematic lighting, no text"
}

Rules:
- Detect the dream's input language; write all text fields except dreamType and imagePrompt in that language
- dreamType always in English; imagePrompt always in English
- emotions[].value must sum to exactly 100; all metrics: integers 0–100
- Nightmares: apply IRT reframe in interpretation/deepAnalysis (empathy first, rescript the ending, name a talisman in advice)

Dream: "${dreamText}"`;

  const result = await model.generateContent(prompt);
  const raw  = result.response.text();
  const text = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/g, '').trim();
  return JSON.parse(text);
}

// ─── generateDreamImage ───────────────────────────────────────────────────────
// Accepts the LLM-generated imagePrompt for maximum visual alignment.
export async function generateDreamImage(imagePrompt) {
  if (DUMMY_MODE) {
    await new Promise((r) => setTimeout(r, 800));
    return null;
  }

  const fullPrompt = `${imagePrompt}. Style: ethereal surrealism, dark mystical void background, bioluminescent cyan and deep violet accents, cinematic composition, hyper-detailed digital art, 4K, no text, no watermarks.`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: { responseModalities: ['IMAGE'] },
      }),
    }
  );

  if (!res.ok) throw new Error(`Image generation failed: ${res.status}`);

  const data = await res.json();
  const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
  if (!part) throw new Error('No image in response');

  return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
}

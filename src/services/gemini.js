// ─── DUMMY MODE (테스트용) ───────────────────────────────────────────────────
// 운영 전환 시 아래 DUMMY_MODE를 false로 변경하세요.
const DUMMY_MODE = false;

const DUMMY_POOL = [
  {
    title: '수정 도시 위를 나는 꿈',
    dreamType: 'Lucid',
    summary: '자유를 향한 갈망과 현실을 초월하고자 하는 무의식의 강렬한 표출이다.',
    interpretation: '수정 도시는 당신이 추구하는 완벽한 이상 세계를 상징합니다. 비행은 현실의 제약에서 벗어나고 싶은 깊은 욕구를 나타내며, 동시에 높은 목표를 향해 나아가는 자신감을 반영합니다.',
    deepAnalysis: '수정의 투명함은 당신이 스스로에게 솔직해지고 싶다는 심리를 드러냅니다. 도시의 구조물들은 사회적 관계와 책임감을 의미하며, 그 위를 자유롭게 비행한다는 것은 그 무게를 잠시 내려놓고 싶다는 무의식의 신호입니다.',
    advice: '오늘은 작은 것에서 자유를 찾아보세요. 계획 없이 산책을 떠나거나 오랫동안 미뤄온 창작 활동을 시작해보는 것이 좋습니다.',
    lucky: { number: '07', color: '크리스탈 블루', direction: '동', totem: '독수리' },
    emotions: [{ name: '경이로움', value: 55 }, { name: '기쁨', value: 30 }, { name: '불안', value: 15 }],
    metrics: { fortune: 82, creativity: 91, stress: 28, realism: 44, nightmare: 12 },
  },
  {
    title: '깊은 바다 속 고요한 탐험',
    dreamType: 'Recurring',
    summary: '내면 깊은 곳에 잠든 감정과 기억을 탐색하려는 무의식의 반복적인 초대이다.',
    interpretation: '바다는 방대한 무의식을 상징하며, 깊이 잠수할수록 억눌린 감정과 마주하게 됩니다. 이 꿈이 반복된다는 것은 아직 해결되지 않은 내면의 과제가 있음을 의미합니다.',
    deepAnalysis: '바닷속 어둠은 직면하기 두려운 진실을 나타내고, 빛이 비치는 곳으로 향하는 움직임은 치유를 향한 의지를 상징합니다. 과거의 특정 사건이 이 꿈의 근원일 가능성이 높습니다.',
    advice: '글쓰기나 그림으로 오늘의 감정을 표현해보세요. 억눌린 것을 꺼내는 행위 자체가 강력한 치유가 됩니다.',
    lucky: { number: '13', color: '딥 네이비', direction: '북', totem: '고래' },
    emotions: [{ name: '평온', value: 40 }, { name: '슬픔', value: 35 }, { name: '호기심', value: 25 }],
    metrics: { fortune: 60, creativity: 74, stress: 45, realism: 68, nightmare: 30 },
  },
  {
    title: '어두운 숲속의 낯선 추격',
    dreamType: 'Nightmare',
    summary: '현실에서 회피하고 싶은 압박감과 두려움이 상징적 형태로 투영된 꿈이다.',
    interpretation: '추격은 당신이 의식적으로 피하고 있는 문제나 감정을 상징합니다. 숲은 복잡하게 얽힌 현실의 상황을 나타내며, 도망친다는 행위는 그 문제를 아직 정면으로 마주할 준비가 되지 않았음을 보여줍니다.',
    deepAnalysis: '추격자의 정체는 종종 자기 자신의 그림자 자아입니다. 이 꿈은 더 이상 내면의 갈등을 외면하지 말고 용기 있게 직면하라는 강력한 메시지를 담고 있습니다.',
    advice: '오늘 가장 미루고 싶은 일을 먼저 처리하세요. 두려움을 직면하는 순간 그것의 힘은 절반으로 줄어듭니다.',
    lucky: { number: '21', color: '다크 레드', direction: '남', totem: '늑대' },
    emotions: [{ name: '공포', value: 50 }, { name: '긴장', value: 35 }, { name: '혼란', value: 15 }],
    metrics: { fortune: 38, creativity: 55, stress: 85, realism: 72, nightmare: 78 },
  },
  {
    title: '별빛 사막을 걷는 여행',
    dreamType: 'Prophetic',
    summary: '새로운 시작을 앞두고 내면의 나침반이 방향을 제시하는 예지적 신호이다.',
    interpretation: '사막은 겉으로는 황량해 보이지만 그 안에 무한한 가능성을 품고 있습니다. 별빛 아래 홀로 걷는 것은 자기 자신을 신뢰하고 독립적인 결정을 내려야 할 시점임을 암시합니다.',
    deepAnalysis: '사막의 무한한 지평선은 아직 결정되지 않은 미래를 상징하며, 별빛은 당신 내면의 직관과 지혜를 의미합니다. 가까운 미래에 중요한 선택의 기로에 서게 될 것입니다.',
    advice: '직관을 믿으세요. 논리보다 감이 더 정확한 시기입니다. 오늘 중요한 결정이 있다면 머리보다 가슴에 물어보세요.',
    lucky: { number: '03', color: '골든 앰버', direction: '서', totem: '사막여우' },
    emotions: [{ name: '고독', value: 40 }, { name: '희망', value: 45 }, { name: '경외감', value: 15 }],
    metrics: { fortune: 88, creativity: 66, stress: 22, realism: 50, nightmare: 18 },
  },
];

function getDummy() {
  return DUMMY_POOL[Math.floor(Math.random() * DUMMY_POOL.length)];
}

// ─── REAL API ────────────────────────────────────────────────────────────────
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI   = new GoogleGenerativeAI(API_KEY);

export async function analyzeDream(dreamText) {
  if (DUMMY_MODE) {
    await new Promise((r) => setTimeout(r, 1200)); // 실제 API처럼 약간의 딜레이
    return getDummy();
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

  const prompt = `You are a mystical dream interpreter with deep knowledge of psychology, symbolism, and the subconscious mind.

Analyze the following dream and respond ONLY with a valid JSON object matching this exact structure. No markdown, no code blocks.

{
  "title": "Poetic title, 5 words max",
  "dreamType": "Exactly one of: Lucid, Nightmare, Recurring, Abstract, Prophetic",
  "summary": "One-sentence poetic summary of the dream's essence",
  "interpretation": "2-3 sentence psychological interpretation (this will be visible)",
  "deepAnalysis": "2-3 sentence deeper hidden analysis revealing subconscious secrets",
  "advice": "Short mystical daily advice based on this dream",
  "lucky": {
    "number": "A 2-digit lucky number as string e.g. 07",
    "color": "A color name e.g. Deep Blue, Crimson Red, Forest Green",
    "direction": "Exactly one of: North, South, East, West",
    "totem": "An animal name e.g. Owl, Wolf, Fox"
  },
  "emotions": [
    { "name": "Primary emotion name", "value": 60 },
    { "name": "Secondary emotion name", "value": 25 },
    { "name": "Tertiary emotion name", "value": 15 }
  ],
  "metrics": {
    "fortune": 75,
    "creativity": 80,
    "stress": 30,
    "realism": 45,
    "nightmare": 20
  }
}

Rules:
- Detect the language of the dream input and write ALL text fields (title, summary, interpretation, deepAnalysis, advice, lucky.color, lucky.direction, lucky.totem, emotions[].name) in that same language
- dreamType must always remain in English (Lucid, Nightmare, Recurring, Abstract, Prophetic)
- emotions[].value must sum to exactly 100
- All metrics values are integers between 0 and 100
- Respond only with the JSON object, nothing else

Dream to analyze:
"${dreamText}"`;

  const result = await model.generateContent(prompt);
  const raw = result.response.text();
  const text = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/g, '').trim();
  return JSON.parse(text);
}

export async function generateDreamImage(dreamText) {
  if (DUMMY_MODE) {
    await new Promise((r) => setTimeout(r, 800));
    return null; // 더미 모드에서는 이미지 없이 그라디언트 표시
  }

  const prompt = `Cinematic dreamscape illustration based on this dream: "${dreamText}". Style: Surreal, dark mystical atmosphere, glowing neon cyan and purple accents, dark void background, highly detailed digital art, 4K quality, no text.`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
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

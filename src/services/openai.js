import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeDream(dreamText) {
  const prompt = `You are a mystical dream interpreter with deep knowledge of psychology, symbolism, and the subconscious mind.

Analyze the following dream and respond in JSON format with this exact structure:
{
  "title": "A poetic title for this dream (5 words max)",
  "summary": "A one-sentence poetic summary of the dream's essence",
  "symbols": [
    { "symbol": "symbol name", "meaning": "its psychological meaning" },
    { "symbol": "symbol name", "meaning": "its psychological meaning" },
    { "symbol": "symbol name", "meaning": "its psychological meaning" }
  ],
  "interpretation": "A rich, 2-3 sentence deep psychological interpretation of the dream",
  "emotion": "The dominant emotional theme (one word)",
  "advice": "A short, mystical piece of advice or reflection based on the dream"
}

Dream to analyze:
"${dreamText}"

Respond only with valid JSON, no markdown or code blocks.`;

  const response = await client.chat.completions.create({
    model: 'gpt-5-mini',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
  });

  const text = response.choices[0].message.content ?? '{}';
  return JSON.parse(text);
}

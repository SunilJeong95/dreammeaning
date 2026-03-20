import { useEffect } from 'react';

const DEFAULT_TITLE = 'DreamLens — AI Dream Interpretation & Analysis';
const DEFAULT_DESC =
  'Decode your dreams with AI. DreamLens delivers Jungian & Freudian dream analysis, AI-generated dream imagery, and symbolic interpretations.';

export function useSEO({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content');
    if (metaDesc) metaDesc.setAttribute('content', description);

    return () => {
      document.title = prevTitle || DEFAULT_TITLE;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc || DEFAULT_DESC);
    };
  }, [title, description]);
}

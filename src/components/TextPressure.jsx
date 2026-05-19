import { useEffect, useRef, useState } from 'react';

/**
 * TextPressure — letras com peso/largura variável reagindo ao cursor.
 * Usa Roboto Flex (variable font: wght 100-1000, wdth 25-151).
 *
 * Props:
 *   text:         string a renderizar
 *   minFontSize:  px mínimo (default 32)
 *   className:    classes extras
 *   color:        cor base do texto
 *   strokeColor:  se fornecido, mostra apenas contorno
 */
export default function TextPressure({
  text = 'VERTEX',
  minFontSize = 32,
  className = '',
  color = '#F4F4F5',
  italic = false,
}) {
  const containerRef = useRef(null);
  const spansRef = useRef([]);
  const cursor = useRef({ x: -9999, y: -9999 });
  const [fontSize, setFontSize] = useState(72);

  // Calcular fontSize baseado no container
  useEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      const chars = Math.max(text.length, 1);
      const size = Math.max(minFontSize, (w / chars) * 1.4);
      setFontSize(size);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [text, minFontSize]);

  // Mouse tracking + RAF update das letras
  useEffect(() => {
    const onMove = (e) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
    };
    const onTouch = (e) => {
      if (e.touches[0]) {
        cursor.current.x = e.touches[0].clientX;
        cursor.current.y = e.touches[0].clientY;
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });

    let rafId;
    const tick = () => {
      const spans = spansRef.current;
      const maxDist = 350; // raio de influência
      spans.forEach((span) => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cursor.current.x - cx;
        const dy = cursor.current.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / maxDist);
        // wght 400 → 900 conforme proximidade
        const wght = 400 + t * 500;
        // wdth 75 → 151 conforme proximidade
        const wdth = 75 + t * 76;
        // scale leve 1 → 1.08
        const scale = 1 + t * 0.06;
        span.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`;
        span.style.transform = `scale(${scale})`;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  const chars = text.split('');

  return (
    <div
      ref={containerRef}
      className={`relative w-full text-center ${className}`}
      style={{ lineHeight: 0.9 }}
    >
      <h1
        className="font-display select-none"
        style={{
          fontSize: `${fontSize}px`,
          color,
          fontWeight: 400,
          fontStyle: italic ? 'italic' : 'normal',
          fontFamily: '"Roboto Flex", "Inter", system-ui, sans-serif',
          letterSpacing: '-0.02em',
          margin: 0,
          padding: 0,
        }}
      >
        {chars.map((c, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            style={{
              display: 'inline-block',
              fontVariationSettings: '"wght" 400, "wdth" 100',
              transition: 'font-variation-settings 60ms linear, transform 60ms linear',
              willChange: 'font-variation-settings, transform',
            }}
          >
            {c === ' ' ? ' ' : c}
          </span>
        ))}
      </h1>
    </div>
  );
}

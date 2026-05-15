import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Marquee infinito horizontal com velocidade reativa ao scroll.
 * Quando o usuário scrolla rápido, o marquee acelera — efeito Awwwards clássico.
 *
 * Usa duplicação do conteúdo + animação CSS pura para performance.
 */
export default function Marquee({
  items = [],
  speed = 30,
  separator = '—',
  className = '',
  reverse = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let velocity = 1;
    let targetVelocity = 1;
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const tickerHandler = () => {
      const now = performance.now();
      const dt = now - lastTime;
      const scrollDiff = Math.abs(window.scrollY - lastScrollY);

      // Calcula velocidade extra baseada no scroll
      const scrollVelocity = Math.min(scrollDiff / dt * 50, 5);
      targetVelocity = 1 + scrollVelocity;

      // Suaviza a transição
      velocity += (targetVelocity - velocity) * 0.08;

      lastScrollY = window.scrollY;
      lastTime = now;

      container.style.animationDuration = `${speed / velocity}s`;
    };

    gsap.ticker.add(tickerHandler);

    return () => {
      gsap.ticker.remove(tickerHandler);
    };
  }, [speed]);

  // Duplica os itens para criar loop infinito
  const duplicated = [...items, ...items];

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div
        ref={containerRef}
        className={`flex whitespace-nowrap will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className="flex items-center gap-8 mx-8 flex-shrink-0">
            <span>{item}</span>
            <span className="text-[#C9A84C]/40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

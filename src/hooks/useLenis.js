import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Hook global de smooth scroll cinematográfico.
 * Inicializa o Lenis uma vez no App e mantém o scroll suave em todo o site.
 *
 * Detecta automaticamente:
 * - prefers-reduced-motion (desativa para acessibilidade)
 * - viewport mobile (usa configuração mais leve)
 */
export default function useLenis() {
  useEffect(() => {
    // Respeita preferência de redução de movimento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // touch devices: deixa nativo (melhor performance)
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

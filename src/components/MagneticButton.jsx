import { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * MagneticButton - botão com efeito magnético estilo Awwwards.
 * O conteúdo "puxa" o cursor quando ele se aproxima, dando sensação premium.
 *
 * Uso:
 * <MagneticButton strength={0.4}>
 *   <a href="...">Clique aqui</a>
 * </MagneticButton>
 *
 * Desativa automaticamente em mobile/touch (onde não há cursor real).
 */
export default function MagneticButton({ children, strength = 0.4, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Detecta dispositivo touch — sem hover, sem magnético
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

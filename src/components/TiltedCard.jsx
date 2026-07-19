import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * TiltedCard — card 3D que inclina conforme o cursor + spotlight + lift.
 * Compatível com children arbitrários.
 *
 * Props:
 *   maxTilt:    grau máximo de tilt (default 12)
 *   scale:      escala em hover (default 1.03)
 *   glow:       cor do spotlight (default magenta/40)
 *   className:  classes wrapper
 */
export default function TiltedCard({
  children,
  maxTilt = 12,
  scale = 1.03,
  glow = 'rgba(201, 168, 76, 0.35)',
  className = '',
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 250, damping: 25 });

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useTransform(
    [mx, my],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, ${glow} 0%, transparent 55%)`
  );

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set(-(py - 0.5) * maxTilt * 2);
    mx.set(px * 100);
    my.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    setActive(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      animate={{ scale: active ? scale : 1 }}
      transition={{ scale: { type: 'spring', stiffness: 220, damping: 20 } }}
      className={`relative will-change-transform ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="absolute inset-0 z-20 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300"
        animate={{ opacity: active ? 1 : 0 }}
      />
      <div style={{ transform: 'translateZ(40px)' }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

function wrap(min, max, v) {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
}

/**
 * ParallaxRow — uma linha rolando, com velocidade afetada pelo scroll velocity.
 */
function ParallaxRow({ children, baseVelocity = 50, separator = '✦', accent = false }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const items = Array(6).fill(children);

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div className="flex whitespace-nowrap font-display" style={{ x }}>
        {items.map((c, i) => (
          <span key={i} className="flex items-center mr-12">
            <span
              className={`text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight ${
                accent ? 'text-transparent' : 'text-white/90'
              }`}
              style={
                accent
                  ? {
                      WebkitTextStroke: '2px #C9A84C',
                      color: 'transparent',
                    }
                  : undefined
              }
            >
              {c}
            </span>
            <span className="text-vertex-magenta text-4xl md:text-6xl mx-8">
              {separator}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * ScrollVelocity — 2 linhas opostas, estilo Awwwards.
 */
export default function ScrollVelocity() {
  return (
    <section className="relative py-12 md:py-16 bg-vertex-black border-y border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(255,0,110,0.06), transparent 60%)',
        }}
      />
      <div className="space-y-2 md:space-y-3">
        <ParallaxRow baseVelocity={40} accent={false}>
          Sites Sob Medida
        </ParallaxRow>
        <ParallaxRow baseVelocity={-50} accent>
          Tráfego que Vende
        </ParallaxRow>
        <ParallaxRow baseVelocity={35} accent={false}>
          Estratégia Premium
        </ParallaxRow>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = '!@#$%^&*():{};|,.<>/?ABCDEF0123456789';

/**
 * EncryptButton — letras embaralham no hover e resolvem.
 * Estilo "hacker / estratégia digital".
 *
 * Props:
 *   text:     label final
 *   href:     URL (renderiza <a>)
 *   onClick:  handler (renderiza <button>)
 *   icon:     ReactNode antes do texto
 *   variant:  'primary' (ouro sólido) | 'ghost' (borda ouro)
 */
export default function EncryptButton({
  text = 'Quero minha estratégia',
  href,
  onClick,
  icon,
  variant = 'primary',
  className = '',
  target,
  rel,
}) {
  const intervalRef = useRef(null);
  const [display, setDisplay] = useState(text);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split('')
        .map((char, idx) => {
          if (char === ' ') return ' ';
          if (pos / CYCLES_PER_LETTER > idx) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplay(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplay(text);
  };

  const baseClasses =
    'group relative overflow-hidden inline-flex items-center justify-center gap-3 px-7 py-4 font-bold uppercase tracking-wider text-sm md:text-base transition-colors duration-300 rounded-md';

  const variantClasses =
    variant === 'primary'
      ? 'bg-vertex-gold text-vertex-black hover:bg-vertex-gold-light animate-pulse-glow'
      : 'bg-transparent border-2 border-vertex-gold text-vertex-gold hover:border-vertex-gold-light hover:text-vertex-gold-light';

  const Inner = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onHoverStart={scramble}
      onHoverEnd={stopScramble}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span
        className={
          variant === 'primary'
            ? 'absolute inset-0 -z-10 bg-gold-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-shine'
            : ''
        }
      />
      {icon}
      <span className="relative">{display}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="inline-block">
      {Inner}
    </button>
  );
}

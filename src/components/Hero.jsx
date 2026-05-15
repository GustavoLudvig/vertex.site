import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';

const WA_NUMBER = "5548984941156";
const WA_MESSAGE = encodeURIComponent("Olá! Quero minha estratégia digital agora. Pode me ajudar?");

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

// Divide o texto em <span class="char"> para animar letra por letra
const SplitTextChars = ({ text, className = '', startDelay = 0 }) => {
  const words = text.split(' ');
  let charIndex = 0;
  return (
    <span className={className} style={{ perspective: '600px', display: 'inline-block' }}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="char inline-block"
              style={{ willChange: 'transform, opacity' }}
              data-delay={startDelay + charIndex++ * 0.035}
            >
              {char}
            </span>
          ))}
          {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const noteRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current?.querySelectorAll('.char') || [];

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      eyebrowRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0.1
    )
      .fromTo(
        chars,
        { y: 180, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.4, stagger: 0.025 },
        0.3
      )
      .fromTo(
        subRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 },
        0.9
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        1.1
      )
      .fromTo(
        noteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        1.4
      );

    return () => tl.kill();
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('/Vertex-banner.png')` }}
    >
      {/* Overlay com gradiente cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80"></div>

      {/* Brilho dourado sutil no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-8">
        <p
          ref={eyebrowRef}
          className="text-[#C9A84C] uppercase text-xs md:text-sm tracking-[0.3em] font-semibold mb-8 opacity-0"
        >
          ESTRATÉGIA DIGITAL DE ALTO IMPACTO
        </p>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block mb-1 sm:mb-2">
            <SplitTextChars text="Sua empresa não precisa" />
          </span>
          <span className="block mb-1 sm:mb-2">
            <SplitTextChars text="de mais um site." />
          </span>
          <span className="block">
            <SplitTextChars text="Precisa de uma" />
          </span>
          <span className="block italic text-[#C9A84C]">
            <SplitTextChars text="estratégia que vende." />
          </span>
        </h1>

        <p
          ref={subRef}
          className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto opacity-0"
        >
          A Vertex cria sites, aplicativos e campanhas que trabalham 24h por dia para atrair, converter e fidelizar os clientes certos para o seu negócio.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
        >
          <MagneticButton strength={0.3}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon />
              Quero minha estratégia agora
            </a>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <a href="#methodology" className="btn-secondary text-center">
              Como funciona?
            </a>
          </MagneticButton>
        </div>

        <p
          ref={noteRef}
          className="text-white/50 text-sm mt-6 opacity-0"
        >
          Atendimento humano • Resposta em minutos
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-white/60">Role</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

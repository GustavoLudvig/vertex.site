import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Aurora from './Aurora';
import EncryptButton from './EncryptButton';

const WA_NUMBER = '5548984941156';
const WA_MESSAGE = encodeURIComponent(
  'Olá! Quero minha estratégia digital agora. Pode me ajudar?'
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

// Divide texto em <span class="word"> + <span class="char"> pra animar letra por letra
const SplitWords = ({ text, className = '' }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-baseline"
          style={{ paddingBottom: '0.15em' }}
        >
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="char inline-block"
              style={{ willChange: 'transform, opacity' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const noteRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current?.querySelectorAll('.char') || [];
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      eyebrowRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      0.1
    )
      .fromTo(
        chars,
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.018 },
        0.3
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.0 },
        1.1
      )
      .fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        1.2
      )
      .fromTo(
        ctaRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1.4
      )
      .fromTo(
        noteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        1.7
      );

    return () => tl.kill();
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-vertex-black"
    >
      {/* Aurora WebGL background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={['#C9A84C', '#FF006E', '#0a0a0a']}
          amplitude={1.2}
          blend={0.55}
          speed={0.6}
        />
      </div>

      {/* Vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-vertex-black/30 via-transparent to-vertex-black pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-12">
        <p
          ref={eyebrowRef}
          className="inline-flex items-center gap-3 text-vertex-gold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.35em] font-semibold mb-8 opacity-0"
        >
          <span className="h-px w-6 sm:w-8 bg-vertex-gold/60" />
          VERTEX ESTRATÉGIA DIGITAL
          <span className="h-px w-6 sm:w-8 bg-vertex-gold/60" />
        </p>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white"
        >
          <span className="block mb-1 sm:mb-2">
            <SplitWords text="Empresa profissional" />
          </span>
          <span className="block mb-1 sm:mb-2">
            <SplitWords text="em impulsionar" />
          </span>
          <span className="block italic text-vertex-gold">
            <SplitWords text="negócios." />
          </span>
        </h1>

        <div
          ref={lineRef}
          className="h-px w-24 mx-auto mb-8 bg-gradient-to-r from-transparent via-vertex-magenta to-transparent opacity-0 origin-center"
        />

        <p
          ref={subRef}
          className="text-vertex-mute text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto opacity-0"
        >
          Hospedagens, clínicas, petshops, mecânicas e muito mais — a Vertex cria
          vídeos, sites e campanhas que trabalham 24h por dia pra transformar o seu
          negócio em referência no seu ramo.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
        >
          <EncryptButton
            text="Quero minha estratégia agora"
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsAppIcon />}
            variant="primary"
          />
          <EncryptButton
            text="Como funciona?"
            href="#methodology"
            variant="ghost"
          />
        </div>

        <p ref={noteRef} className="text-white/50 text-sm mt-6 opacity-0">
          Atendimento humano • Resposta em minutos
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-white/60">
          Role
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-vertex-gold to-transparent" />
      </div>
    </section>
  );
}

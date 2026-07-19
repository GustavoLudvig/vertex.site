import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Stethoscope,
  PawPrint,
  Wrench,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import TiltedCard from './TiltedCard';

const WA_NUMBER = '5548984941156';
const wa = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ---------------------------------------------------------------- */
/* DATA — 4 segmentos. slots = 5 espaços de story (video + site).   */
/* Preencher um slot: { video: '/arquivo.mp4', site: 'https://...', */
/* label: 'Nome do cliente' }                                       */
/* ---------------------------------------------------------------- */
const SEGMENTS = [
  {
    id: 'hospedagens',
    label: 'Hospedagens',
    icon: Home,
    accent: '#C9A84C',
    tagline: 'Airbnb, pousadas e chalés que lotam a agenda',
    description:
      'O hóspede vê o vídeo, se imagina lá dentro e reserva.',
    featured: {
      video: '/hospedagens-principal.mp4',
      badge: 'CASE REAL',
      title: 'Vídeo de venda — Hospedagem',
    },
    slots: [null, null, null, null, null],
    waMessage:
      'Olá! Tenho uma hospedagem e quero um vídeo/site como o que vi no portfólio da Vertex.',
  },
  {
    id: 'clinicas',
    label: 'Clínicas',
    icon: Stethoscope,
    accent: '#C9A84C',
    tagline: 'Clínicas que transmitem confiança em segundos',
    description:
      'Autoridade em vídeo, site impecável e campanhas que enchem a agenda.',
    featured: null,
    slots: [null, null, null, null, null],
    waMessage:
      'Olá! Tenho uma clínica e quero impulsionar minha presença digital com a Vertex.',
  },
  {
    id: 'petshops',
    label: 'Petshops',
    icon: PawPrint,
    accent: '#C9A84C',
    tagline: 'Petshops que viram a paixão do bairro',
    description:
      'Vídeos dos peludos que emocionam tutores e trazem clientes toda semana.',
    featured: null,
    slots: [null, null, null, null, null],
    waMessage:
      'Olá! Tenho um petshop e quero impulsionar meu negócio com a Vertex.',
  },
  {
    id: 'mecanicas',
    label: 'Mecânicas',
    icon: Wrench,
    accent: '#C9A84C',
    tagline: 'Oficinas que passam profissionalismo de verdade',
    description:
      'Vídeos que mostram a qualidade do serviço e anúncios que trazem carros pro pátio.',
    featured: null,
    slots: [null, null, null, null, null],
    waMessage:
      'Olá! Tenho uma mecânica e quero impulsionar meu negócio com a Vertex.',
  },
];

/* ---------------------------------------------------------------- */
/* Featured — vídeo grande vertical (9:16) com som e autoplay       */
/* ---------------------------------------------------------------- */
function FeaturedVideo({ data, accent }) {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    const el = wrapRef.current;
    if (!v || !el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
          setPlaying(true);
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    v.volume = 0.7;
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative w-full max-w-[380px] mx-auto">
      {/* Glow estático — leve, não rouba GPU do vídeo */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[3rem] pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(ellipse at center, ${accent}33 0%, transparent 70%)`,
        }}
      />

      <div className="relative rounded-[2rem] overflow-hidden border border-vertex-gold/25 bg-vertex-black shadow-[0_0_60px_rgba(201,168,76,0.18)] aspect-[9/16]">
          <video
            ref={videoRef}
            src={data.video}
            muted={muted}
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] rounded-full border backdrop-blur-md bg-vertex-black/50 border-vertex-gold/50 text-vertex-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-vertex-gold animate-pulse" />
              {data.badge}
            </span>
          </div>

          {/* Controles */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            <button
              onClick={togglePlay}
              aria-label={playing ? 'Pausar vídeo' : 'Tocar vídeo'}
              className="w-11 h-11 rounded-full bg-vertex-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-vertex-gold hover:border-vertex-gold hover:text-vertex-black transition-colors"
            >
              {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? 'Ativar som' : 'Desativar som'}
              className={`w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center transition-colors ${
                muted
                  ? 'bg-vertex-black/60 border-white/15 text-white hover:bg-vertex-gold hover:border-vertex-gold hover:text-vertex-black'
                  : 'bg-vertex-gold border-vertex-gold text-vertex-black'
              }`}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          {/* Hint de som */}
          {muted && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 left-4 z-20 text-[10px] uppercase tracking-widest text-white/70 bg-vertex-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 hover:text-white transition-colors"
            >
              🔊 Toque para ouvir
            </button>
          )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Featured placeholder — segmento ainda sem vídeo grande           */
/* ---------------------------------------------------------------- */
function FeaturedPlaceholder({ segment }) {
  const Icon = segment.icon;
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
        {/* Borda animada */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(110deg, transparent 20%, ${segment.accent}22 40%, ${segment.accent}44 50%, ${segment.accent}22 60%, transparent 80%)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 2.8s linear infinite',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center border animate-float"
            style={{ borderColor: `${segment.accent}44`, background: `${segment.accent}11` }}
          >
            <Icon size={36} style={{ color: segment.accent }} />
          </div>
          <p className="text-white/80 font-bold uppercase tracking-[0.25em] text-xs">
            Grande case
            <br />
            em produção
          </p>
          <p className="text-vertex-mute text-sm leading-relaxed">
            Seu negócio pode ser o primeiro case em destaque deste segmento.
          </p>
          <a
            href={wa(segment.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full border transition-colors hover:text-vertex-black"
            style={{ borderColor: segment.accent, color: segment.accent }}
            onMouseEnter={(e) => (e.currentTarget.style.background = segment.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Quero ser o primeiro
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* StoryCard — vídeo 9:16 em cima + site embaixo                    */
/* ---------------------------------------------------------------- */
function StoryCard({ slot, index, segment }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 0.5;
    setMuted(false);
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
  };

  /* Slot vazio — placeholder premium */
  if (!slot) {
    const Icon = segment.icon;
    return (
      <TiltedCard maxTilt={8} scale={1.03} glow={`${segment.accent}30`} className="rounded-2xl">
        <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02]">
          <div className="relative aspect-[9/16] flex flex-col items-center justify-center gap-3 px-4 text-center">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(110deg, transparent 25%, ${segment.accent}33 50%, transparent 75%)`,
                backgroundSize: '200% 100%',
                animation: `shimmer 3.2s linear infinite`,
                animationDelay: `${index * 0.35}s`,
              }}
            />
            <span
              className="font-mono text-[11px] tracking-widest"
              style={{ color: `${segment.accent}88` }}
            >
              0{index + 1}
            </span>
            <Icon size={26} className="text-white/25" />
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
              Em breve
            </p>
          </div>
          {/* Barra do site (placeholder) */}
          <div className="border-t border-white/[0.07] px-3 py-3 flex items-center justify-center gap-2">
            <Sparkles size={12} className="text-white/30" />
            <span className="text-white/35 text-[10px] uppercase tracking-widest font-semibold">
              Reservado
            </span>
          </div>
        </div>
      </TiltedCard>
    );
  }

  /* Slot preenchido — vídeo + link do site */
  return (
    <TiltedCard maxTilt={8} scale={1.04} glow={`${segment.accent}40`} className="rounded-2xl">
      <div
        className="rounded-2xl overflow-hidden border border-white/10 bg-vertex-black group"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="relative aspect-[9/16]">
          <video
            ref={videoRef}
            src={slot.video}
            muted={muted}
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-vertex-black/80 to-transparent pointer-events-none" />
          <p className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-semibold truncate">
            {slot.label}
          </p>
        </div>
        <a
          href={slot.site}
          target="_blank"
          rel="noopener noreferrer"
          className="border-t border-white/10 px-3 py-3 flex items-center justify-center gap-2 text-vertex-gold hover:bg-vertex-gold hover:text-vertex-black transition-colors"
        >
          <ExternalLink size={13} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Ver site</span>
        </a>
      </div>
    </TiltedCard>
  );
}

/* ---------------------------------------------------------------- */
/* Section principal                                                 */
/* ---------------------------------------------------------------- */
export default function PortfolioSection() {
  const [active, setActive] = useState(SEGMENTS[0].id);
  const segment = SEGMENTS.find((s) => s.id === active);
  const Icon = segment.icon;

  // Chips do Hero pulam direto pra tab do segmento
  useEffect(() => {
    const onSegment = (e) => {
      if (SEGMENTS.some((s) => s.id === e.detail)) setActive(e.detail);
    };
    window.addEventListener('vertex:segment', onSegment);
    return () => window.removeEventListener('vertex:segment', onSegment);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-vertex-black overflow-hidden"
    >
      {/* ---- Fundo 3D: grid em perspectiva + orbs ---- */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] opacity-[0.13]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            transform: 'perspective(600px) rotateX(58deg) scale(1.6)',
            transformOrigin: 'center bottom',
            maskImage: 'linear-gradient(to top, black 30%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 90%)',
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-vertex-gold/[0.07] blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-vertex-gold/10 blur-3xl" />
      </div>

      {/* ---- Texto gigante de fundo ---- */}
      <AnimatePresence mode="wait">
        <motion.span
          key={segment.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          aria-hidden
          className="absolute top-16 left-1/2 -translate-x-1/2 text-[16vw] leading-none font-black uppercase whitespace-nowrap select-none pointer-events-none"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.06)',
            color: 'transparent',
          }}
        >
          {segment.label}
        </motion.span>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-vertex-gold/60" />
            PORTFÓLIO POR SEGMENTO
            <span className="h-px w-8 bg-vertex-gold/60" />
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Impulsionamos{' '}
            <span className="italic text-transparent bg-clip-text bg-gold-sheen">
              cada segmento.
            </span>
          </h2>
          <p className="text-vertex-mute text-base md:text-lg max-w-2xl mx-auto">
            Escolha o seu ramo. Veja com seus olhos.
          </p>
        </div>

        {/* ---- Tabs ---- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 md:mb-20">
          {SEGMENTS.map((s) => {
            const SIcon = s.icon;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`relative inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'text-vertex-black border-transparent'
                    : 'text-white/70 border-white/15 hover:border-vertex-gold/60 hover:text-white bg-white/[0.03]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="segment-pill"
                    className="absolute inset-0 rounded-full bg-gold-sheen"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <SIcon size={15} />
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ---- Conteúdo do segmento ---- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={segment.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45 }}
          >
            {/* Bloco principal: vídeo grande + texto */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
              <div className="order-2 lg:order-1">
                {segment.featured ? (
                  <FeaturedVideo data={segment.featured} accent={segment.accent} />
                ) : (
                  <FeaturedPlaceholder segment={segment} />
                )}
              </div>

              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 border"
                  style={{ borderColor: `${segment.accent}44`, background: `${segment.accent}11` }}
                >
                  <Icon size={26} style={{ color: segment.accent }} />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-5">
                  {segment.tagline}
                </h3>
                <p className="text-vertex-mute text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  {segment.description}
                </p>
                <a
                  href={wa(segment.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-vertex-gold text-vertex-black text-sm font-bold uppercase tracking-wider hover:bg-vertex-gold-light transition-colors animate-pulse-glow"
                >
                  Quero isso pro meu negócio
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Cases rápidos — 5 stories */}
            <div className="mb-4 flex items-end justify-between">
              <h4 className="text-white font-bold text-lg md:text-2xl tracking-tight">
                Cases rápidos{' '}
                <span className="text-vertex-mute font-normal text-sm md:text-base">
                  — vídeo em cima, site embaixo
                </span>
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {segment.slots.map((slot, i) => (
                <StoryCard key={`${segment.id}-${i}`} slot={slot} index={i} segment={segment} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

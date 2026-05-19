import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from './TiltedCard';

const WA_NUMBER = '5548984941156';
const wa = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Categorias por segmento — categorias vazias mostram placeholder
const SEGMENTS = [
  { id: 'todos', label: 'Todos' },
  { id: 'perfumarias', label: 'Perfumarias' },
  { id: 'restaurantes', label: 'Restaurantes' },
  { id: 'lojas', label: 'Lojas de Roupas' },
  { id: 'petshops', label: 'Petshops' },
  { id: 'barbearias', label: 'Barbearias' },
  { id: 'outros', label: 'Outros' },
];

const PROJECTS = [
  {
    id: 'cerqueira',
    segment: 'perfumarias',
    title: 'Cerqueira Imported',
    subtitle: 'Loja de importados premium',
    description:
      'Site desenvolvido do zero no VS Code — design exclusivo, carregamento ultrarrápido, SEO técnico e catálogo dinâmico.',
    url: 'https://www.cerqueiraimported.site',
    type: 'iframe',
    badge: 'NO AR',
    badgeColor: 'gold',
    waMessage: 'Olá! Vi o site da Cerqueira Imported no portfólio da Vertex e gostaria de algo parecido.',
  },
  {
    id: 'beefy',
    segment: 'restaurantes',
    title: 'Beefy',
    subtitle: 'Restaurante de cortes nobres',
    description:
      'Steakhouse premium em Florianópolis. Design cinematográfico, reservas integradas, identidade dark/wood.',
    video: '/portfolio-beefy.mp4',
    type: 'video',
    badge: 'EM FINALIZAÇÃO',
    badgeColor: 'magenta',
    waMessage: 'Olá! Vi o projeto Beefy no portfólio da Vertex e gostaria de um site assim pro meu negócio.',
  },
  {
    id: 'theresa',
    segment: 'lojas',
    title: 'use.theresa',
    subtitle: 'Loja de roupas femininas',
    description:
      'E-commerce feminino com curadoria de moda autoral. Catálogo visual forte, checkout fluido, integração Instagram.',
    video: '/portfolio-theresa.mp4',
    type: 'video',
    badge: 'EM FINALIZAÇÃO',
    badgeColor: 'magenta',
    waMessage: 'Olá! Vi o projeto use.theresa no portfólio da Vertex e gostaria de algo parecido.',
  },
];

const Badge = ({ text, color = 'gold' }) => {
  const colors = {
    gold: 'bg-vertex-gold/15 border-vertex-gold/40 text-vertex-gold',
    magenta: 'bg-vertex-magenta/15 border-vertex-magenta/40 text-vertex-magenta',
  };
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] rounded-full border backdrop-blur-md ${colors[color]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          color === 'gold' ? 'bg-vertex-gold' : 'bg-vertex-magenta'
        } animate-pulse`}
      />
      {text}
    </span>
  );
};

/* ---------- IframeMedia ---------- */
function IframeMedia({ url }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative w-full h-full bg-vertex-black">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-vertex-gold/30 border-t-vertex-gold rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src={url}
        title="preview"
        className="absolute inset-0 w-full h-full"
        onLoad={() => setLoading(false)}
        loading="lazy"
        scrolling="no"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}

/* ---------- VideoMedia (autoplay muted, hover unmuta) ---------- */
function VideoMedia({ src, posterText }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 0.6;
    setMuted(false);
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
  };

  const togglePause = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  if (!available) {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-vertex-black via-vertex-gold/5 to-vertex-magenta/5 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-vertex-gold/80 text-xs uppercase tracking-[0.3em] mb-2">
            Vídeo em produção
          </p>
          <p className="text-white/60 text-sm">{posterText}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full bg-vertex-black overflow-hidden group/video"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        onError={() => setAvailable(false)}
      />
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-md rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          LIVE
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const v = videoRef.current;
          if (!v) return;
          v.muted = !v.muted;
          setMuted(v.muted);
        }}
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-vertex-gold hover:border-vertex-gold transition-colors"
        aria-label={muted ? 'Ativar som' : 'Silenciar'}
      >
        {muted ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
      <button
        onClick={togglePause}
        className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-vertex-gold hover:border-vertex-gold transition-colors opacity-0 group-hover/video:opacity-100"
        aria-label={paused ? 'Continuar' : 'Pausar'}
      >
        {paused ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}

/* ---------- ProjectCard ---------- */
function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <TiltedCard maxTilt={8} scale={1.02} className="rounded-2xl">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-vertex-black shadow-2xl shadow-vertex-magenta/10">
          <div className="absolute inset-0">
            {project.type === 'iframe' ? (
              <IframeMedia url={project.url} />
            ) : (
              <VideoMedia src={project.video} posterText={project.title} />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-vertex-black via-vertex-black/0 to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 z-10 pointer-events-none">
            <Badge text={project.badge} color={project.badgeColor} />
          </div>
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow:
                '0 0 80px rgba(255,0,110,0.25), inset 0 0 60px rgba(201,168,76,0.08)',
            }}
          />
        </div>
      </TiltedCard>

      <div className="mt-6 px-2">
        <div className="flex items-baseline gap-3 mb-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-[0.2em] text-vertex-mute">
            {project.subtitle}
          </span>
        </div>
        <p className="text-vertex-mute leading-relaxed mb-4 max-w-2xl">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-vertex-gold text-sm font-semibold hover:text-vertex-magenta transition-colors group/link"
            >
              Ver site ao vivo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover/link:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          )}
          <a
            href={wa(project.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold hover:text-white transition-colors"
          >
            Quero algo assim →
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- EmptyCategoryCard ---------- */
function EmptyCategoryCard({ segment }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-vertex-gold/20 bg-gradient-to-br from-vertex-black via-vertex-gold/[0.03] to-vertex-magenta/[0.05] flex items-center justify-center p-8 group hover:border-vertex-gold/50 transition-colors"
    >
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full border border-vertex-gold/30 text-vertex-gold/60 group-hover:text-vertex-gold group-hover:scale-110 transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <p className="text-vertex-gold uppercase text-xs tracking-[0.3em] font-bold mb-2">
          Sua marca aqui
        </p>
        <p className="text-white/60 text-sm max-w-xs mx-auto">
          Próximo case em <span className="text-white font-semibold">{segment}</span>. Vai ser o seu?
        </p>
        <a
          href={wa(`Olá! Quero ser o próximo case Vertex em ${segment}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-vertex-magenta text-xs uppercase tracking-widest font-bold hover:underline"
        >
          Conversar agora →
        </a>
      </div>
    </motion.article>
  );
}

/* ---------- Section ---------- */
export default function PortfolioSection() {
  const [active, setActive] = useState('todos');

  const filtered =
    active === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.segment === active);

  const segmentLabel = SEGMENTS.find((s) => s.id === active)?.label || 'Todos';

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-vertex-black overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,0,110,0.08), transparent 50%), radial-gradient(circle at 80% 70%, rgba(201,168,76,0.06), transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-3 text-vertex-gold uppercase text-xs tracking-[0.4em] font-bold mb-5">
            <span className="h-px w-8 bg-vertex-gold/60" />
            PORTFÓLIO REAL
            <span className="h-px w-8 bg-vertex-gold/60" />
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-tight">
            Sites que <span className="italic text-vertex-gold">vendem</span> de verdade.
          </h2>
          <p className="text-vertex-mute text-base md:text-lg max-w-2xl mx-auto">
            Cada projeto é feito à mão, com estratégia e código limpo. Filtre pelo seu segmento e veja o padrão Vertex.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {SEGMENTS.map((seg) => {
            const isActive = active === seg.id;
            const count =
              seg.id === 'todos'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.segment === seg.id).length;
            return (
              <button
                key={seg.id}
                onClick={() => setActive(seg.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
                  isActive ? 'text-vertex-black' : 'text-vertex-mute hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tabbg"
                    className="absolute inset-0 rounded-full bg-vertex-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {seg.label}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-vertex-black/20 text-vertex-black'
                        : 'bg-white/5 text-vertex-mute'
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={active}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`empty-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <EmptyCategoryCard segment={segmentLabel} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

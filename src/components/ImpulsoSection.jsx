import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clapperboard, MonitorSmartphone, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: '01',
    icon: Clapperboard,
    title: 'Vídeo que para o scroll',
    text: 'Produção vertical feita pra rede social. Seu negócio aparece do jeito que merece.',
  },
  {
    num: '02',
    icon: MonitorSmartphone,
    title: 'Site que converte',
    text: 'Feito à mão, rápido e com WhatsApp em um toque. O cliente chega pronto pra fechar.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Tráfego que escala',
    text: 'Google e Meta Ads com foco em uma coisa: cliente novo chegando todo dia.',
  },
];

export default function ImpulsoSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.impulso-card') || [];
    const anims = [];
    cards.forEach((card, i) => {
      anims.push(
        gsap.fromTo(
          card,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 82%' },
          }
        )
      );
    });
    return () => anims.forEach((a) => a.scrollTrigger?.kill() || a.kill());
  }, []);

  return (
    <section
      id="impulso"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-vertex-black overflow-hidden"
    >
      {/* Fundo: linha de horizonte dourada */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-vertex-gold/30 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] h-80 rounded-full bg-vertex-gold/[0.05] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <p className="section-label flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-vertex-gold/60" />
            O MÉTODO
            <span className="h-px w-8 bg-vertex-gold/60" />
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Impulso em{' '}
            <span className="italic text-transparent bg-clip-text bg-gold-sheen">3 passos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="impulso-card group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 overflow-hidden hover:border-vertex-gold/40 transition-colors duration-500"
              >
                {/* Número gigante de fundo */}
                <span
                  aria-hidden
                  className="absolute -top-6 -right-3 text-[7rem] md:text-[8.5rem] font-black leading-none select-none pointer-events-none text-transparent transition-all duration-500 group-hover:-translate-y-1"
                  style={{ WebkitTextStroke: '1px rgba(201,168,76,0.15)' }}
                >
                  {step.num}
                </span>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 border border-vertex-gold/30 bg-vertex-gold/10 text-vertex-gold group-hover:bg-vertex-gold group-hover:text-vertex-black transition-colors duration-500">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-vertex-mute text-sm md:text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

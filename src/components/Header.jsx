import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#services', label: 'Serviços' },
  { href: '#methodology', label: 'Metodologia' },
  { href: '#cta', label: 'Resultados' },
  { href: '#contact', label: 'Contato' },
];

const WHATSAPP_URL =
  'https://wa.me/5548984941156?text=Ol%C3%A1!%20Quero%20uma%20an%C3%A1lise%20gratuita%20para%20minha%20empresa.';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trava scroll quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-vertex-black/70 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#top" className="flex-shrink-0 relative z-10">
              <img
                src="/logo-vertex-estrategia.png"
                alt="Vertex Estratégia Digital"
                className="h-11 w-auto"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white text-sm font-medium tracking-wide hover:text-vertex-gold transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-vertex-gold to-vertex-magenta scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vertex-gold text-vertex-black text-sm font-bold uppercase tracking-wider hover:bg-vertex-magenta hover:text-white transition-colors"
            >
              <WhatsAppIcon size={16} />
              Análise gratuita
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-7 h-[2px] bg-white origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-7 h-[2px] bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-7 h-[2px] bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 z-40 bg-vertex-black/95 backdrop-blur-xl"
          >
            {/* Glow ambiente */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 20%, rgba(255,0,110,0.15), transparent 50%), radial-gradient(circle at 70% 80%, rgba(201,168,76,0.12), transparent 50%)',
              }}
            />

            <div className="relative h-full flex flex-col justify-center px-8 pt-20 pb-12">
              <nav className="flex flex-col gap-2 mb-10">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    className="group block text-white text-4xl font-bold tracking-tight py-3 border-b border-white/10 hover:text-vertex-gold transition-colors"
                  >
                    <span className="inline-block text-vertex-gold/40 text-sm mr-3 font-mono align-middle">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-vertex-gold text-vertex-black text-sm font-bold uppercase tracking-wider animate-pulse-glow w-full"
              >
                <WhatsAppIcon size={18} />
                Análise gratuita
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-center text-white/50 text-xs uppercase tracking-widest"
              >
                Atendimento humano • Resposta em minutos
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

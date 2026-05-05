import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/Vertex-banner.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ESTRATÉGIA DIGITAL DE ALTO IMPACTO
        </motion.p>
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sua empresa não precisa de mais um site.<br />
          Precisa de uma{' '}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#E5C76B] bg-clip-text text-transparent">
            estratégia que vende
          </span>
          .
        </motion.h1>
        <motion.p
          className="section-subtitle mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A Vertex cria sites, aplicativos e campanhas que trabalham 24h por dia para atrair, converter e fidelizar os clientes certos para o seu negócio.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#cta" className="btn-primary text-center">
            Quero minha estratégia agora
          </a>
          <a href="#methodology" className="btn-secondary text-center">
            Como funciona?
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
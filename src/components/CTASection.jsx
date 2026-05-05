import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111] relative overflow-hidden"
      id="cta"
    >
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img
          src="/logo-vertex-estrategia.png"
          alt="Vertex"
          className="w-96 h-auto"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pronto para ter uma presença digital que realmente trabalha por você?
        </motion.h2>
        <motion.p
          className="text-[#B0B0B0] text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Agende uma análise estratégica gratuita e descubra o que está impedindo sua empresa de crescer online.
        </motion.p>
        <motion.a
          href={`https://wa.me/5548984135076`}
          className="btn-primary inline-block mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Quero minha análise gratuita agora
        </motion.a>
        <motion.p
          className="text-[#B0B0B0] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Sem compromisso. Sem enrolação. Resultado de verdade.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
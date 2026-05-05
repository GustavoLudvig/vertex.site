import React from 'react';
import { motion } from 'framer-motion';

const Methodology = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Estratégico',
      description: 'Antes de criar qualquer coisa, mergulhamos no seu negócio. Estudamos seu mercado, concorrentes, público-alvo e posicionamento para entender o que realmente vai mover sua empresa.',
    },
    {
      number: '02',
      title: 'Construção com Propósito',
      description: 'Desenvolvemos seu site, app ou campanha com base no diagnóstico. Cada decisão tem uma razão estratégica — do copywriting ao layout, da paleta à estrutura de SEO.',
    },
    {
      number: '03',
      title: 'Ativação e Lançamento',
      description: 'Colocamos sua presença digital no ar de forma estruturada, garantindo que o Google indexe, os anúncios performem e os primeiros resultados apareçam rapidamente.',
    },
    {
      number: '04',
      title: 'Gestão e Evolução Contínua',
      description: 'Monitoramos, otimizamos e evoluímos sua estratégia mensalmente. Relatórios claros, decisões baseadas em dados e um time dedicado ao crescimento do seu negócio.',
    },
  ];

  return (
    <section className="py-24 bg-[#0f0f0f] relative" id="methodology">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-[#C9A84C]/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">COMO TRABALHAMOS</p>
          <h2 className="section-title">
            A maioria das agências entrega o projeto e some. Nós ficamos.
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Nossa metodologia garante que seu investimento digital esteja sempre gerando retorno — não apenas no lançamento, mas todos os dias.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    'Site profissional de alta conversão',
    'Aplicativo mobile (iOS e Android)',
    'SEO técnico e local',
    'Otimização de velocidade e performance',
    'Copywriting estratégico',
    'Gestão de Google Ads',
    'Gestão de Meta Ads (Instagram e Facebook)',
    'Análise de público e segmentação',
    'Relatórios mensais de resultado',
    'Suporte e manutenção contínua',
  ];

  const leftColumn = services.slice(0, 5);
  const rightColumn = services.slice(5);

  return (
    <section className="py-24 bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">SOLUÇÕES COMPLETAS</p>
          <h2 className="section-title">
            Tudo que sua empresa precisa para crescer no digital
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {leftColumn.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-[#C9A84C] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-3 h-3 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#FFFFFF]">{service}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {rightColumn.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-[#C9A84C] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-3 h-3 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#FFFFFF]">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';

const ValueProps = () => {
  const pillars = [
    {
      icon: '💻', // Placeholder, replace with actual icon
      title: 'Sites e APPs de Alta Conversão',
      description: 'Desenvolvemos sites e aplicativos que não são apenas bonitos — são construídos para converter visitantes em clientes. Cada elemento é pensado estrategicamente para guiar o usuário até a ação que importa.',
    },
    {
      icon: '📈', // Placeholder
      title: 'Presença Dominante no Google',
      description: 'Através de SEO local e técnico, posicionamos sua empresa nas primeiras posições do Google nas buscas da sua região. Quando seu cliente procurar pelo que você oferece, sua empresa vai aparecer primeiro.',
    },
    {
      icon: '🎯', // Placeholder
      title: 'Tráfego Pago que Gera Clientes Reais',
      description: 'Gerenciamos suas campanhas no Google Ads e Meta Ads com foco em dados e resultado. Não buscamos curtidas — buscamos clientes prontos para fechar negócio com você.',
    },
  ];

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">O QUE ENTREGAMOS</p>
          <h2 className="section-title">
            Não entregamos projetos. Entregamos crescimento.
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Enquanto a maioria das agências para no "projeto entregue", nós ficamos ao seu lado, garantindo que cada investimento digital gere retorno real e sustentável para o seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#C9A84C]/25 hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4">
                {pillar.title}
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
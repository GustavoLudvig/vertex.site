import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Definição do Público Ideal',
    subtitle: 'Chegamos exatamente em quem compra de você',
    description: 'Mapeamos o perfil do seu cliente ideal — idade, localização, interesses, comportamentos e renda. Sua campanha não é mostrada para qualquer pessoa: é direcionada para quem tem real potencial de comprar.',
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 max-w-sm mx-auto">
        <div className="text-[#1877F2] text-sm font-bold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Gerenciador de Público
        </div>
        <div className="space-y-3">
          {[
            { icon: '📍', label: 'Localização', value: 'SC + raio 50km' },
            { icon: '👥', label: 'Idade', value: '25–55 anos' },
            { icon: '💡', label: 'Interesses', value: 'Importados, Moda, Lifestyle' },
            { icon: '💰', label: 'Renda', value: 'Classes A e B' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between bg-[#0a0a0a] rounded-lg px-4 py-2.5">
              <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="text-white text-sm font-medium">{item.value}</span>
            </div>
          ))}
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-center mt-2">
            <div className="text-blue-300 text-sm font-semibold">Alcance estimado</div>
            <div className="text-blue-200 text-xl font-bold">82.000 pessoas</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Criativos que Param o Scroll',
    subtitle: 'Design + copy que gera clique e curiosidade',
    description: 'Desenvolvemos imagens, vídeos e carrosséis com design profissional e textos que geram emoção e desejo. Sem criativo fraco, não há campanha que funcione — aqui isso é tratado como prioridade.',
    visual: (
      <div className="max-w-xs mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-white px-4 pt-3 pb-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E5C76B] flex items-center justify-center">
              <span className="text-[#0a0a0a] text-xs font-bold">V</span>
            </div>
            <div>
              <div className="text-gray-900 text-sm font-semibold">Vertex Estratégia</div>
              <div className="text-gray-400 text-xs">Publicidade · Agora</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] h-44 flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 px-4">
              <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-2">Oferta Exclusiva</div>
              <div className="text-white text-xl font-bold leading-tight">Seu site pronto<br/>em 7 dias</div>
              <div className="text-white/60 text-xs mt-1">A partir de R$1.500</div>
            </div>
          </div>
          <div className="bg-white px-4 py-3">
            <div className="text-gray-700 text-sm">Sua empresa no topo do Google + site que converte. Fale agora! 👇</div>
            <div className="mt-3 bg-[#1877F2] rounded-lg py-2 text-center text-white text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
              Saiba Mais
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Segmentação Precisa',
    subtitle: 'Seu anúncio chega para quem importa',
    description: 'Usamos públicos personalizados, lookalikes e segmentação comportamental para exibir seu anúncio apenas para pessoas com real propensão a comprar — gastando menos e convertendo mais.',
    visual: (
      <div className="max-w-sm mx-auto space-y-3">
        <div className="bg-[#1877F2]/10 border border-[#1877F2]/30 rounded-xl p-4">
          <div className="text-[#1877F2] text-xs font-semibold mb-3 uppercase">Públicos ativos na campanha</div>
          <div className="space-y-2">
            {[
              { name: 'Visitantes do site (30 dias)', size: '1.240', match: '95%' },
              { name: 'Lookalike — compradores', size: '45.000', match: '82%' },
              { name: 'Interesses: moda premium', size: '28.000', match: '74%' },
            ].map((p) => (
              <div key={p.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                <div>
                  <div className="text-white text-xs font-medium">{p.name}</div>
                  <div className="text-[#B0B0B0] text-xs">{p.size} pessoas</div>
                </div>
                <div className="text-green-400 text-xs font-bold">{p.match}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Retargeting Inteligente',
    subtitle: 'Reimpacta quem já demonstrou interesse',
    description: 'Quem visitou seu site, viu seu produto ou interagiu com seu perfil vê seu anúncio novamente com uma oferta mais direta. São as pessoas mais quentes do funil — e as que mais convertem.',
    visual: (
      <div className="max-w-sm mx-auto">
        <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
          <div className="text-center mb-4">
            <div className="text-[#B0B0B0] text-xs mb-1">Funil de retargeting</div>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Viu seu post', count: '4.200', w: 'w-full', color: 'bg-[#1877F2]/40' },
              { label: 'Visitou o site', count: '1.840', w: 'w-4/5', color: 'bg-[#1877F2]/55' },
              { label: 'Viu produto', count: '720', w: 'w-3/5', color: 'bg-[#1877F2]/70' },
              { label: 'Retargeting ativo', count: '720', w: 'w-3/5', color: 'bg-green-500/60' },
              { label: 'Converteu', count: '134', w: 'w-2/5', color: 'bg-green-500' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-24 text-[#B0B0B0] text-xs text-right flex-shrink-0">{item.label}</div>
                <div className={`h-7 ${item.w} ${item.color} rounded-lg flex items-center px-3 transition-all duration-500`}>
                  <span className="text-white text-xs font-medium">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '05',
    title: 'Análise e Escala',
    subtitle: 'Dobramos o que funciona, cortamos o que não rende',
    description: 'Monitoramos diariamente os resultados — CTR, CPM, CPC, ROAS e conversões. Escalamos os criativos vencedores e pausamos os que não performam. Investimento sempre otimizado.',
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 max-w-sm mx-auto">
        <div className="text-[#1877F2] text-xs font-bold mb-4">Resumo da campanha — 30 dias</div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Alcance', value: '82.400', up: true },
            { label: 'Cliques no link', value: '2.140', up: true },
            { label: 'Leads gerados', value: '98', up: true },
            { label: 'Custo por lead', value: 'R$19,80', up: false },
          ].map((m) => (
            <div key={m.label} className="bg-[#0a0a0a] rounded-lg p-3">
              <div className="text-[#B0B0B0] text-xs">{m.label}</div>
              <div className="text-white font-bold text-lg">{m.value}</div>
              <div className="text-green-400 text-xs">{m.up ? '↑ 31%' : '↓ 22%'}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#1877F2]/10 border border-[#1877F2]/30 rounded-lg p-3 text-center">
          <div className="text-blue-300 text-sm font-semibold">Retorno sobre investimento</div>
          <div className="text-blue-200 text-2xl font-bold">6.2x ROAS</div>
        </div>
      </div>
    ),
  },
];

const FacebookStrategySection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden" id="facebook-strategy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ESTRATÉGIA META ADS</p>
          <h2 className="section-title">
            Como geramos clientes via Facebook e Instagram
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Não buscamos curtidas nem seguidores. Cada campanha é configurada para gerar leads reais — pessoas prontas para fechar negócio com você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Visual */}
          <div className="relative min-h-[300px] flex items-center justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {steps[active].visual}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Steps */}
          <div className="space-y-3 order-1 lg:order-2">
            {steps.map((step, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  active === i
                    ? 'border-[#1877F2]/60 bg-[#1877F2]/5'
                    : 'border-white/5 bg-[#1a1a1a] hover:border-white/10'
                }`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                    active === i ? 'bg-[#1877F2] text-white' : 'bg-[#0a0a0a] text-[#1877F2] border border-[#1877F2]/30'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base">{step.title}</div>
                    <div className="text-[#B0B0B0] text-sm mt-0.5">{step.subtitle}</div>
                    {active === i && (
                      <motion.p
                        className="text-[#B0B0B0] text-sm mt-3 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5548984941156?text=Ol%C3%A1!%20Quero%20ativar%20o%20Meta%20Ads%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Quero ativar meu Meta Ads
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FacebookStrategySection;

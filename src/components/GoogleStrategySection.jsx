import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Pesquisa de Palavras-Chave',
    subtitle: 'Encontramos o que seu cliente digita',
    description: 'Mapeamos exatamente o que seus clientes pesquisam no Google — termos com intenção de compra, volume alto e concorrência acessível. Sua campanha começa com dados, não com achismo.',
    visual: (
      <div className="bg-white rounded-xl p-5 shadow-lg font-sans max-w-sm mx-auto">
        <div className="flex items-center gap-2 mb-4 border-b pb-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">loja de importados florianópolis</div>
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
        </div>
        <div className="space-y-2 text-xs">
          {['importados SC • 2.4k/mês', 'loja importados • 5.1k/mês', 'produto importado flo • 890/mês'].map((kw) => (
            <div key={kw} className="flex items-center gap-2 p-2 rounded bg-blue-50 text-blue-700">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              {kw}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Criação dos Anúncios',
    subtitle: 'Textos que capturam atenção e cliques',
    description: 'Desenvolvemos títulos e descrições com copy estratégico — focados em dor, solução e urgência. Testamos múltiplas variações para descobrir qual converte mais para o seu público.',
    visual: (
      <div className="bg-white rounded-xl p-5 shadow-lg font-sans max-w-sm mx-auto border border-gray-100">
        <div className="text-xs text-green-700 font-medium mb-1">Anúncio · Google</div>
        <div className="text-blue-700 text-base font-medium mb-1 hover:underline cursor-pointer">
          Importados Premium em SC | Entrega Rápida
        </div>
        <div className="text-green-700 text-xs mb-2">🌐 cerqueiraimported.site</div>
        <div className="text-gray-600 text-xs leading-relaxed">
          Os melhores produtos importados com preço justo. +500 itens disponíveis. Frete grátis acima de R$200. Compre agora!
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex gap-3">
          <span className="text-xs text-blue-600 hover:underline cursor-pointer">Ver Produtos</span>
          <span className="text-xs text-blue-600 hover:underline cursor-pointer">Promoções</span>
          <span className="text-xs text-blue-600 hover:underline cursor-pointer">Contato</span>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Sua Empresa no Topo',
    subtitle: 'Visível quando o cliente está pronto para comprar',
    description: 'Sua empresa aparece no exato momento que o cliente pesquisa pelo que você vende — com alta intenção de compra. Diferente das redes sociais, aqui o cliente já está querendo comprar.',
    visual: (
      <div className="bg-white rounded-xl p-4 shadow-lg font-sans max-w-sm mx-auto border border-gray-100">
        <div className="flex items-center gap-2 mb-3 bg-gray-50 rounded-full px-3 py-2 text-xs text-gray-500">
          <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          importados florianópolis
        </div>
        <div className="space-y-2">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[10px] bg-yellow-400 text-white font-bold px-1.5 py-0.5 rounded">Patrocinado</span>
            </div>
            <div className="text-blue-700 text-sm font-medium">Cerqueira Imported — SC</div>
            <div className="text-gray-500 text-xs">Produtos premium · Entrega rápida</div>
          </div>
          <div className="opacity-40 rounded-lg p-3 border border-gray-100">
            <div className="text-blue-700 text-sm">Concorrente 1</div>
            <div className="text-gray-400 text-xs">resultado orgânico comum...</div>
          </div>
          <div className="opacity-30 rounded-lg p-3 border border-gray-100">
            <div className="text-blue-700 text-sm">Concorrente 2</div>
            <div className="text-gray-400 text-xs">resultado orgânico...</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Lead Entra em Contato',
    subtitle: 'Clique → Conversa → Cliente',
    description: 'O cliente clica no seu anúncio, cai em uma landing page otimizada e entra em contato direto via WhatsApp, formulário ou ligação. Funil completo, sem vazamentos.',
    visual: (
      <div className="max-w-sm mx-auto space-y-3">
        {[
          { icon: '🖱️', step: 'Clica no anúncio', color: '#4285F4' },
          { icon: '📱', step: 'Cai na landing page', color: '#C9A84C' },
          { icon: '💬', step: 'Abre o WhatsApp', color: '#25D366' },
          { icon: '🤝', step: 'Fecha o negócio', color: '#25D366' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
            <div className="text-2xl">{item.icon}</div>
            <div className="flex-1 text-white font-medium">{item.step}</div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '05',
    title: 'Otimização Contínua',
    subtitle: 'Cada real investido rende mais mês a mês',
    description: 'Analisamos os dados semanalmente — CTR, CPC, conversões, ROAS. Pausamos o que não performa, escalamos o que converte. Relatório mensal transparente com todos os resultados.',
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 max-w-sm mx-auto">
        <div className="text-[#C9A84C] text-xs font-semibold mb-4 uppercase tracking-wider">Relatório — Maio/2026</div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Impressões', value: '48.200', up: true },
            { label: 'Cliques', value: '1.840', up: true },
            { label: 'Conversões', value: '127', up: true },
            { label: 'Custo por lead', value: 'R$14,20', up: false },
          ].map((m) => (
            <div key={m.label} className="bg-[#0a0a0a] rounded-lg p-3">
              <div className="text-[#B0B0B0] text-xs">{m.label}</div>
              <div className="text-white font-bold text-lg">{m.value}</div>
              <div className={`text-xs font-medium ${m.up ? 'text-green-400' : 'text-green-400'}`}>
                {m.up ? '↑ 23%' : '↓ 18%'} vs mês anterior
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 text-center">
          <div className="text-green-400 text-sm font-semibold">ROAS: 8.4x 🚀</div>
          <div className="text-green-300/70 text-xs">R$8,40 gerado para cada R$1 investido</div>
        </div>
      </div>
    ),
  },
];

const GoogleStrategySection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-[#0f0f0f] relative overflow-hidden" id="google-strategy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ESTRATÉGIA GOOGLE ADS</p>
          <h2 className="section-title">
            Como colocamos sua empresa no topo do Google
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Uma metodologia testada e otimizada para gerar leads qualificados — clientes que já estão procurando o que você vende.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Steps navigation */}
          <div className="space-y-3">
            {steps.map((step, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  active === i
                    ? 'border-[#C9A84C]/60 bg-[#C9A84C]/5'
                    : 'border-white/5 bg-[#1a1a1a] hover:border-white/10'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                    active === i ? 'bg-[#C9A84C] text-[#0a0a0a]' : 'bg-[#0a0a0a] text-[#C9A84C] border border-[#C9A84C]/30'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base">{step.title}</div>
                    <div className="text-[#B0B0B0] text-sm mt-0.5">{step.subtitle}</div>
                    {active === i && (
                      <motion.p
                        className="text-[#B0B0B0] text-sm mt-3 leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
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

          {/* Visual */}
          <div className="relative min-h-[300px] flex items-center justify-center">
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
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5548984941156?text=Ol%C3%A1!%20Quero%20ativar%20o%20Google%20Ads%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Quero ativar meu Google Ads
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleStrategySection;

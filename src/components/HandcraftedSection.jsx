import React from 'react';
import { motion } from 'framer-motion';

const aiBuilders = [
  { label: 'Shopify / Wix / Lovable', bad: true },
  { label: 'Templates genéricos', bad: true },
  { label: 'Código gerado por IA', bad: true },
  { label: 'Limitações de customização', bad: true },
  { label: 'Carregamento lento', bad: true },
  { label: 'Mensalidade vitalícia', bad: true },
];

const vertexFeatures = [
  { label: 'Código escrito à mão no VS Code' },
  { label: 'Layout 100% exclusivo para sua marca' },
  { label: 'Infinitas customizações' },
  { label: 'Velocidade máxima (sem bloatware)' },
  { label: 'Você é dono do código' },
  { label: 'Sem limitações de plataforma' },
];

const CodeSnippet = () => (
  <div className="rounded-xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-black/60 font-mono text-sm">
    <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
      </div>
      <span className="text-[#B0B0B0] text-xs ml-3">HeroSection.jsx — VS Code</span>
    </div>
    <div className="bg-[#1e1e1e] p-5 space-y-1 leading-relaxed overflow-x-auto">
      <div><span className="text-[#569cd6]">const </span><span className="text-[#dcdcaa]">HeroSection</span><span className="text-[#d4d4d4]"> = () =&gt; {'{'}</span></div>
      <div className="pl-4"><span className="text-[#569cd6]">return </span><span className="text-[#d4d4d4]">(</span></div>
      <div className="pl-8"><span className="text-[#4ec9b0]">&lt;section</span><span className="text-[#9cdcfe]"> className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"hero-full"</span><span className="text-[#4ec9b0]">&gt;</span></div>
      <div className="pl-12"><span className="text-[#4ec9b0]">&lt;h1</span><span className="text-[#9cdcfe]"> className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"headline"</span><span className="text-[#4ec9b0]">&gt;</span></div>
      <div className="pl-16"><span className="text-[#d4d4d4]">Sua estratégia que </span><span className="text-[#c9a84c] font-bold">vende</span></div>
      <div className="pl-12"><span className="text-[#4ec9b0]">&lt;/h1&gt;</span></div>
      <div className="pl-12"><span className="text-[#6a9955]">{'/* Cada linha pensada estrategicamente */'}</span></div>
      <div className="pl-12"><span className="text-[#4ec9b0]">&lt;CTAButton</span><span className="text-[#9cdcfe]"> whatsapp</span><span className="text-[#4ec9b0]"> /&gt;</span></div>
      <div className="pl-8"><span className="text-[#4ec9b0]">&lt;/section&gt;</span></div>
      <div className="pl-4"><span className="text-[#d4d4d4]">);</span></div>
      <div><span className="text-[#d4d4d4]">{'}'}</span></div>
      <div className="mt-3 pt-3 border-t border-white/5">
        <span className="text-[#569cd6]">export default </span><span className="text-[#dcdcaa]">HeroSection</span><span className="text-[#d4d4d4]">;</span>
      </div>
    </div>
    <div className="bg-[#007acc] px-4 py-2 flex items-center gap-2">
      <div className="flex gap-1 text-white/80 text-xs items-center">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
        <span>React · Tailwind CSS · Feito à mão</span>
      </div>
    </div>
  </div>
);

const HandcraftedSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden" id="handcrafted">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/3 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">DIFERENCIAL TÉCNICO</p>
          <h2 className="section-title">
            Seus concorrentes usam IA para criar site.<br />
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E5C76B] bg-clip-text text-transparent">
              Nós construímos o seu à mão.
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Enquanto plataformas como Shopify, Wix e Lovable geram sites idênticos com código pesado e limitado,
            nós escrevemos cada linha no VS Code — do jeito que você precisa, sem limitações.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Comparison table */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* AI builders - red */}
            <div className="bg-[#1a0a0a] border border-red-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-lg">Gerador de site por IA</h3>
              </div>
              <ul className="space-y-3">
                {aiBuilders.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-red-300/80">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertex - green */}
            <div className="bg-[#0a1a0a] border border-[#25D366]/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <img src="/logo-vertex-estrategia.png" alt="Vertex" className="w-5 h-5 object-contain" />
                </div>
                <h3 className="font-bold text-white text-lg">Vertex — feito no VS Code</h3>
              </div>
              <ul className="space-y-3">
                {vertexFeatures.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-green-300">
                    <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CodeSnippet />
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: '100%', label: 'Customizável' },
                { value: '<1s', label: 'Carregamento' },
                { value: '∞', label: 'Alterações' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111] border border-[#C9A84C]/15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#C9A84C]">{stat.value}</div>
                  <div className="text-xs text-[#B0B0B0] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HandcraftedSection;

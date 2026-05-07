import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const WA_NUMBER = "5548984941156";
const WA_MSG = encodeURIComponent("Olá! Vi o anúncio da Vertex e quero minha análise gratuita.");

const WaButton = ({ text, size = 'lg' }) => (
  <a
    href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center justify-center gap-3 w-full rounded-xl font-bold
      bg-[#25D366] hover:bg-[#1ebe59] active:bg-[#18a84f]
      text-white shadow-xl shadow-[#25D366]/30
      transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
      ${size === 'lg' ? 'py-5 text-lg' : 'py-4 text-base'}
    `}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
    {text}
  </a>
);

const Check = () => (
  <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>
);

const X = () => (
  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  </div>
);

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function AdsLandingPage() {
  useEffect(() => {
    document.title = "Análise Gratuita — Vertex Estratégia Digital";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── HEADER mínimo ── */}
      <div className="flex justify-center pt-5 pb-3 border-b border-white/5">
        <img src="/logo-vertex-estrategia.png" alt="Vertex" className="h-10 w-auto" />
      </div>

      <div className="max-w-lg mx-auto px-5 pb-16">

        {/* ── GANCHO ── */}
        <motion.div className="text-center pt-10 pb-8" {...fade()}>
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-5">
            Para donos de negócio em SC
          </div>
          <h1 className="text-4xl font-black leading-tight mb-4">
            Você tem um negócio bom.<br />
            <span className="text-[#C9A84C]">Mas ninguém está te achando.</span>
          </h1>
          <p className="text-[#B0B0B0] text-lg leading-relaxed">
            Enquanto isso, seu concorrente está aparecendo no Google e no Instagram —
            pegando os clientes que deveriam ser seus.
          </p>
        </motion.div>

        {/* ── DOR ── */}
        <motion.div
          className="bg-[#111] border border-red-500/20 rounded-2xl p-5 mb-6"
          {...fade(0.1)}
        >
          <p className="text-sm font-bold text-red-400 uppercase tracking-wider mb-4">Você se identifica com algum disso?</p>
          <div className="space-y-3">
            {[
              'Tem site, mas quase ninguém acessa',
              'Posta no Instagram mas as vendas não aparecem',
              'Já tentou anúncio e jogou dinheiro fora',
              'Não sabe por onde começar no digital',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <X />
                <span className="text-[#B0B0B0] text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── SOLUÇÃO ── */}
        <motion.div className="mb-6" {...fade(0.15)}>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-3">O que a Vertex faz</p>
          <h2 className="text-2xl font-bold mb-4">
            A gente resolve isso. Do começo ao fim.
          </h2>
          <div className="space-y-3">
            {[
              { title: 'Site que aparece no Google', desc: 'Feito à mão no VS Code — rápido, estratégico e 100% seu. Nada de Wix ou IA.' },
              { title: 'Anúncios que trazem clientes toda semana', desc: 'Google Ads e Meta Ads gerenciados com foco em resultado, não em curtidas.' },
              { title: 'Você acompanha tudo em tempo real', desc: 'Relatório mensal claro, sem enrolação. Você sabe exatamente onde cada real foi.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-[#111] rounded-xl p-4 border border-white/5">
                <Check />
                <div>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-[#B0B0B0] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA 1 ── */}
        <motion.div className="mb-8" {...fade(0.2)}>
          <WaButton text="Quero minha análise gratuita agora" />
          <p className="text-center text-xs text-[#666] mt-2">
            Atendimento humano · Sem robô · Resposta em minutos
          </p>
        </motion.div>

        {/* ── PROVA REAL ── */}
        <motion.div className="mb-8" {...fade(0.25)}>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-3 text-center">Prova real</p>

          <div className="bg-[#111] border border-[#C9A84C]/20 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C9A84C] font-black text-sm">C</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Cerqueira Imported</p>
                <p className="text-[#B0B0B0] text-xs">Loja de importados — Florianópolis, SC</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {[
                'Site do zero — feito à mão, ultra-rápido',
                'Aparece nas buscas do Google em SC',
                'Recebendo visitas e contatos orgânicos',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check />
                  <span className="text-[#B0B0B0] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.cerqueiraimported.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] text-xs underline underline-offset-2"
            >
              Ver o site → cerqueiraimported.site
            </a>
          </div>
        </motion.div>

        {/* ── OBJEÇÕES ── */}
        <motion.div className="mb-8 space-y-3" {...fade(0.3)}>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-3 text-center">Perguntas frequentes</p>
          {[
            {
              q: 'Precisa de verba alta para anunciar?',
              a: 'Não. Dá pra começar com R$300/mês de verba e já ter resultado. O que importa é como os anúncios são configurados.',
            },
            {
              q: 'Quanto tempo para ver resultado?',
              a: 'Anúncios: resultado na primeira semana. SEO: 30 a 90 dias para aparecer organicamente no Google.',
            },
            {
              q: 'Tem contrato longo?',
              a: 'Mínimo de 3 meses para tráfego pago. Sem multa, sem letra miúda.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#111] rounded-xl p-4 border border-white/5">
              <p className="font-semibold text-white text-sm mb-1">{item.q}</p>
              <p className="text-[#B0B0B0] text-xs leading-relaxed">{item.a}</p>
            </div>
          ))}
        </motion.div>

        {/* ── CTA FINAL ── */}
        <motion.div className="text-center" {...fade(0.35)}>
          <p className="text-white font-bold text-xl mb-2">
            Análise gratuita — sem compromisso
          </p>
          <p className="text-[#B0B0B0] text-sm mb-5">
            Mandamos uma análise do seu negócio no digital e o que dá pra fazer.
            De graça. Só clica abaixo.
          </p>
          <WaButton text="Falar com especialista no WhatsApp" />
          <p className="text-xs text-[#444] mt-4">
            © Vertex Estratégia Digital · vertexestrategia.site
          </p>
        </motion.div>

      </div>
    </div>
  );
}

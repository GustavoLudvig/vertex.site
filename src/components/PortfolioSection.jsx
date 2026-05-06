import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Cerqueira Imported',
    url: 'https://www.cerqueiraimported.site',
    displayUrl: 'cerqueiraimported.site',
    description: 'Site de importados de luxo desenvolvido do zero no VS Code. Design premium, carregamento ultrarrápido e otimizado para conversão.',
    tags: ['E-commerce', 'SEO', 'Alta Conversão'],
    color: '#C9A84C',
  },
];

const BrowserMockup = ({ url, displayUrl, name }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-black/60 bg-[#111]">
      {/* Browser bar */}
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
        </div>
        <div className="flex-1 bg-[#0d0d0d] rounded-md px-3 py-1.5 flex items-center gap-2">
          <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
          </svg>
          <span className="text-[#B0B0B0] text-xs truncate">{displayUrl}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C9A84C] hover:text-[#E5C76B] transition-colors flex-shrink-0"
          title="Abrir site"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* iframe preview */}
      <div className="relative bg-[#0d0d0d]" style={{ height: '480px' }}>
        {!loaded && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-[#B0B0B0] text-sm">Carregando {name}…</span>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            </div>
            <p className="text-[#B0B0B0] text-sm">O site está protegido contra incorporação.<br />Clique abaixo para visitá-lo.</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2"
            >
              Visitar {name} →
            </a>
          </div>
        )}
        <iframe
          src={url}
          title={name}
          className={`w-full h-full border-0 transition-opacity duration-500 ${loaded && !error ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-[#111111] relative" id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">PROVA REAL DO NOSSO TRABALHO</p>
          <h2 className="section-title">
            Sites que vendem — não só que ficam bonitos
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Cada projeto é construído do zero, personalizado para o negócio do cliente, com estratégia, velocidade e foco em resultados reais.
          </p>
        </motion.div>

        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="grid lg:grid-cols-2 gap-10 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="order-2 lg:order-1">
              <BrowserMockup url={project.url} displayUrl={project.displayUrl} name={project.name} />
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border border-[#C9A84C]/40 text-[#C9A84C]">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-white">{project.name}</h3>
              <p className="text-[#B0B0B0] text-lg leading-relaxed">{project.description}</p>

              <ul className="space-y-3">
                {[
                  'Desenvolvido 100% no VS Code — código limpo e estratégico',
                  'Velocidade máxima no Google PageSpeed',
                  'Otimizado para ranquear no Google (SEO técnico)',
                  'Layout exclusivo, feito do jeito que o cliente pediu',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#FFFFFF]">
                    <div className="w-5 h-5 bg-[#C9A84C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-[#B0B0B0]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Visitar site →
                </a>
                <a
                  href="https://wa.me/5548984941156?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20da%20Vertex%20e%20quero%20um%20site%20assim."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Quero um assim
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

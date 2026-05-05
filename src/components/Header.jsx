import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg'
          : 'bg-[#0a0a0a]'
      } border-b border-[#C9A84C]/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo-vertex-estrategia.png"
              alt="Vertex Estratégia Digital"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
              Serviços
            </a>
            <a href="#methodology" className="text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
              Metodologia
            </a>
            <a href="#cta" className="text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
              Resultados
            </a>
            <a href="#contact" className="text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a href="#cta" className="btn-primary">
              Quero uma análise gratuita
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Methodology from './components/Methodology';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const WHATSAPP_NUMBER = "5548984941156";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#FFFFFF]">
      <Header />
      <Hero />
      <ValueProps />
      <Methodology />
      <Services />
      <CTASection />
      <Footer />
      <WhatsAppButton number={WHATSAPP_NUMBER} />
    </div>
  );
}

export default App;
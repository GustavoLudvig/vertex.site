import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ImpulsoSection from './components/ImpulsoSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdsLandingPage from './pages/AdsLandingPage';
import useLenis from './hooks/useLenis';

const WHATSAPP_NUMBER = "5548984941156";

function MainSite() {
  useLenis();

  return (
    <div className="min-h-screen bg-vertex-black text-vertex-ink">
      <Header />
      <Hero />
      <PortfolioSection />
      <ImpulsoSection />
      <CTASection />
      <Footer />
      <WhatsAppButton number={WHATSAPP_NUMBER} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/ads" element={<AdsLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

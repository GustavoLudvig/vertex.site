import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ValueProps from './components/ValueProps';
import PortfolioSection from './components/PortfolioSection';
import HandcraftedSection from './components/HandcraftedSection';
import GoogleStrategySection from './components/GoogleStrategySection';
import FacebookStrategySection from './components/FacebookStrategySection';
import Methodology from './components/Methodology';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdsLandingPage from './pages/AdsLandingPage';

const WHATSAPP_NUMBER = "5548984941156";

function MainSite() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#FFFFFF]">
      <Header />
      <Hero />
      <VideoSection />
      <ValueProps />
      <PortfolioSection />
      <HandcraftedSection />
      <GoogleStrategySection />
      <FacebookStrategySection />
      <Methodology />
      <Services />
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
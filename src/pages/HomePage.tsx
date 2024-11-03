// src/pages/HomePage.tsx
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ProductSection } from '../components/ProductSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import BinaryBackground from '../components/BinaryBackground';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BinaryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ProductSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

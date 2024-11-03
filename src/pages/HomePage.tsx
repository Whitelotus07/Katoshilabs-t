import React from 'react';
import BinaryBackground from '../components/BinaryBackground';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ProductSection } from '../components/ProductSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BinaryBackground />
      <div className="relative z-10 flex-grow">
        <Header />
        <main className="container mx-auto px-6">
          <HeroSection />
          <ProductSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

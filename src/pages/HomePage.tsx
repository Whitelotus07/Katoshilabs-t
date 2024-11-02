import React from 'react';
import BinaryBackground from '../components/BinaryBackground';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <BinaryBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6">
          <HeroSection />
          <ProductSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default HomePage;
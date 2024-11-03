// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="text-center py-24">
      <h1 className="text-5xl font-bold mb-6 animate-text-glow">
        Innovating the Future of Software
      </h1>
      <p className="text-xl mb-8 text-neon-blue">
        Katoshi Labs: Where cutting-edge technology meets elegant solutions.
      </p>
      <a
        href="#contact"
        className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
      >
        Get Started
      </a>
    </section>
  );
};

export { HeroSection };

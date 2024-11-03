// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import BinaryBackground from '../components/BinaryBackground';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BinaryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-6xl font-bold text-white mb-4 animate-text-glow">404</h1>
            <h2 className="text-2xl text-neon-blue mb-6">Page Not Found</h2>
            <p className="text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;

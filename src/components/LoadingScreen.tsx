// src/components/LoadingScreen.tsx
import React from 'react';
import { Hexagon } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-deep-space flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Hexagon size={64} className="text-neon-blue animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-white animate-pulse">
          Katoshi Labs
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;

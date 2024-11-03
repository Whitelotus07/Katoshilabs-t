// src/components/AnimatedText.tsx
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <span
      className={`animate-text-glow ${className}`}
      aria-hidden="true"
    >
      {text}
    </span>
  );
};

export default AnimatedText;

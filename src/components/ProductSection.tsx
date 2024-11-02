import React from 'react';
import { Music, Share2, Brain, Activity, Shield, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-space-gray p-8 rounded-lg shadow-neon hover:transform hover:scale-105 transition-all duration-300">
    <div className="text-neon-blue mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ProductSection: React.FC = () => {
  const features = [
    {
      icon: <Brain size={32} />,
      title: "AI-Powered Generation",
      description: "Advanced neural networks create unique, professional-quality music across multiple genres and styles."
    },
    {
      icon: <Activity size={32} />,
      title: "Real-time Customization",
      description: "Adjust tempo, mood, instruments, and structure in real-time with intuitive controls."
    },
    {
      icon: <Share2 size={32} />,
      title: "Global Distribution",
      description: "Seamlessly distribute your music to major platforms including Spotify, Apple Music, and more."
    },
    {
      icon: <Shield size={32} />,
      title: "Rights Management",
      description: "Secure blockchain-based rights management and royalty distribution system."
    },
    {
      icon: <Zap size={32} />,
      title: "Instant Rendering",
      description: "High-speed rendering and processing for immediate access to your generated tracks."
    },
    {
      icon: <Music size={32} />,
      title: "Style Learning",
      description: "Adaptive AI that learns from your preferences and musical style."
    }
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center animate-text-glow">
          Ledi AI
        </h2>
        <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
          Revolutionary AI-powered music generation and distribution platform that puts professional-quality music creation at your fingertips.
        </p>

        {/* Main Product Showcase */}
        <div className="bg-space-gray p-8 rounded-lg shadow-neon mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Create. Distribute. Monetize.
              </h3>
              <p className="text-gray-300 mb-6">
                Ledi AI combines cutting-edge artificial intelligence with powerful distribution tools to revolutionize music creation and publishing. Generate unique tracks, distribute globally, and manage your rights - all in one platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-neon-blue">
                  <span className="mr-2">✓</span>
                  <span>Professional-quality AI music generation</span>
                </div>
                <div className="flex items-center text-neon-blue">
                  <span className="mr-2">✓</span>
                  <span>Global distribution to major platforms</span>
                </div>
                <div className="flex items-center text-neon-blue">
                  <span className="mr-2">✓</span>
                  <span>Blockchain-powered rights management</span>
                </div>
              </div>
              <button className="mt-8 bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300">
                Try Ledi AI
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-deep-space rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-deep-space animate-pulse">
                  {/* Add product screenshot or demo visualization here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to revolutionize your music creation process?
          </p>
          <button className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300">
            Get Started with Ledi AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

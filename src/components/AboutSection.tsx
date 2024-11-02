import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center animate-text-glow">About Katoshi Labs</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-space-gray p-8 rounded-lg shadow-neon">
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize the technology landscape by creating innovative, sustainable, and 
              accessible solutions that empower businesses and individuals to achieve their full 
              potential in the digital age. We strive to be at the forefront of technological 
              advancement while maintaining the highest standards of quality and ethical practices.
            </p>
          </div>

          <div className="bg-space-gray p-8 rounded-lg shadow-neon">
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in transformative technology solutions, recognized for our 
              commitment to innovation, excellence, and positive impact on society. We envision 
              a future where technology seamlessly enhances human capabilities, fostering a more 
              connected, efficient, and sustainable world.
            </p>
          </div>
        </div>

        <div className="bg-space-gray p-8 rounded-lg shadow-neon mt-12">
          <h3 className="text-2xl font-bold mb-4 text-neon-blue text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Innovation</h4>
              <p className="text-gray-300">Pushing boundaries and embracing new possibilities</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Excellence</h4>
              <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Integrity</h4>
              <p className="text-gray-300">Operating with transparency and ethical principles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
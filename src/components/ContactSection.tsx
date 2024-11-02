import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center animate-text-glow">Get in Touch</h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's create something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-space-gray p-6 rounded-lg text-center">
            <Mail size={32} className="text-neon-blue mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <a href="mailto:contact@katoshilabs.com" className="text-gray-300 hover:text-neon-blue transition-colors">
              contact@katoshilabs.com
            </a>
          </div>
          <div className="bg-space-gray p-6 rounded-lg text-center">
            <Phone size={32} className="text-neon-blue mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-gray-300 hover:text-neon-blue transition-colors">
              +1 (234) 567-890
            </a>
          </div>
          <div className="bg-space-gray p-6 rounded-lg text-center">
            <MapPin size={32} className="text-neon-blue mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-300">San Francisco, CA</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:contact@katoshilabs.com"
            className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
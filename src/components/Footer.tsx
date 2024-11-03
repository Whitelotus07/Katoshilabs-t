// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-neon-blue transition-colors"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-gray py-12 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Hexagon size={24} className="text-neon-blue" />
              <span className="text-xl font-bold text-white">Katoshi Labs</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Innovating the future of software development
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/terms" className="text-gray-300 hover:text-neon-blue transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-neon-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-neon-blue transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com/katoshilabs" icon={<Facebook size={20} />} />
              <SocialLink href="https://twitter.com/katoshilabs" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com/company/katoshilabs" icon={<Linkedin size={20} />} />
              <SocialLink href="https://instagram.com/katoshilabs" icon={<Instagram size={20} />} />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Katoshi Labs Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

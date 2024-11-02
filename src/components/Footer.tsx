import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-neon-blue transition-colors p-2"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-gray py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <Hexagon size={32} className="text-white animate-spin-slow" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Katoshi Labs
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Innovating the future of software development
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-3">
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
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
            <div className="flex space-x-6">
              <SocialLink
                href="https://facebook.com/katoshilabs"
                icon={<Facebook size={24} />}
              />
              <SocialLink
                href="https://twitter.com/katoshilabs"
                icon={<Twitter size={24} />}
              />
              <SocialLink
                href="https://linkedin.com/company/katoshilabs"
                icon={<Linkedin size={24} />}
              />
              <SocialLink
                href="https://instagram.com/katoshilabs"
                icon={<Instagram size={24} />}
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2024 Katoshi Labs Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
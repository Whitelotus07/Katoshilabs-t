import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-white hover:text-neon-blue transition-colors duration-300">
    {children}
  </Link>
);

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center space-x-2">
    <Hexagon size={32} className="text-white animate-spin-slow" />
    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      Katoshi Labs
    </span>
  </Link>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#products">Products</NavLink>
          <NavLink to="/#services">Services</NavLink>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#products">Products</NavLink>
          <NavLink to="/#services">Services</NavLink>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

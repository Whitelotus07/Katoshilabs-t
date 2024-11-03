// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className="text-white hover:text-neon-blue transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

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
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
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

export { Header };

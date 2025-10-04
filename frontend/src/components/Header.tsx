import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/produits', label: 'Produits' },
    { path: '/race-goliath', label: 'Race Goliath' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white/90 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src="/logo.png" 
                alt="COCORICO" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium text-base transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-cocorico-red'
                      : 'text-gray-700 hover:text-cocorico-red'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cocorico-red" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-cocorico-red transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Barre de progression */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cocorico-yellow via-cocorico-red to-cocorico-yellow transition-all duration-300 z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Menu Mobile Latéral */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Sidebar */}
        <nav 
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header du menu */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-cocorico-red transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium text-lg transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-cocorico-red'
                    : 'text-gray-700 hover:text-cocorico-red'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="w-12 h-0.5 bg-cocorico-red mt-1" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Header;
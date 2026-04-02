import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Facebook, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Automotriz', href: '/servicios/automotriz' },
    { name: 'Residencial', href: '/servicios/residencial' },
    { name: 'Comercial', href: '/servicios/comercial' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="bg-linear-to-r from-white via-dark/95 to-dark text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 lg:h-28">
          <div className="flex items-center relative w-64 lg:w-80">
            <Link to="/" className="absolute left-0 top-1/2 -translate-y-1/2">
              <img 
                src="/logo.png" 
                alt="Centro de Llaves Juan Ramón" 
                className="h-24 lg:h-32 w-auto scale-x-110 origin-left drop-shadow-md" 
                referrerPolicy="no-referrer" 
              />
              <span className="absolute left-20 lg:left-28 bottom-4 lg:bottom-6 text-[7px] lg:text-[9px] font-black text-primary uppercase tracking-[0.25em] drop-shadow-sm whitespace-nowrap">
                Cerrajería Especializada
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-4 mr-4 border-r border-gray-700 pr-8">
              <a href="https://www.facebook.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/centrodellavesjuanramon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors",
                  location.pathname === link.href ? "text-primary" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+18095328933" className="btn-primary py-2 px-4 text-sm">
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-bold uppercase tracking-widest",
                  location.pathname === link.href ? "text-primary" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <a href="tel:+18095328933" className="btn-primary w-full mb-4">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
              
              <div className="flex justify-center gap-6 py-4 border-t border-gray-800">
                <a href="https://www.facebook.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/centrodellavesjuanramon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

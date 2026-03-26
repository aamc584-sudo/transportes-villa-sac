import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Flota', href: '#flota' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-top-content">
          <span className="contact-item">
            <Phone size={14} /> +49 987 654 321
          </span>
          <span className="contact-item hidden-mobile">
            Líderes en transporte de carga pesada a nivel nacional
          </span>
        </div>
      </div>
      
      <div className="header-main container">
        <div className="logo">
          <a href="#inicio">
            <Truck className="logo-icon" size={28} />
            <div className="logo-text">
              <span className="logo-title">Transportes</span>
              <span className="logo-subtitle">Villa SAC</span>
            </div>
          </a>
        </div>

        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="mobile-menu-header">
            <span className="mobile-title">Menú</span>
            <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={handleLinkClick}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#cotizar" className="btn btn-primary nav-cta hidden-mobile" onClick={handleLinkClick}>
            Cotizar Ahora
          </a>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;

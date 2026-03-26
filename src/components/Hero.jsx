import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text-box fade-in">
          <div className="hero-badge">
            <ShieldCheck size={18} />
            <span>Transporte de confianza</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-main">Especialistas en</span>
            Tránsito de Carga Pesada y Logística
          </h1>
          <p className="hero-subtitle">
            Soluciones integrales de transporte terrestre a nivel nacional. Capacidad, seguridad y puntualidad para impulsar el desarrollo de su empresa.
          </p>
          <div className="hero-cta">
            <a href="#contacto" className="btn btn-primary btn-lg">
              Solícita una Cotización <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#servicios" className="btn btn-outline btn-lg">
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Truck, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-brand">
            <div className="logo">
              <Truck className="logo-icon" size={32} />
              <div className="logo-text">
                <span className="logo-title">Transportes</span>
                <span className="logo-subtitle">Villa SAC</span>
              </div>
            </div>
            <p className="footer-desc">
              Soluciones integrales y confiables en transporte de carga pesada, logística y distribución a nivel nacional. Tu carga segura, a tiempo y en las mejores manos.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" style={{fontFamily: 'var(--font-heading)', fontWeight: 'bold'}}>FB</a>
              <a href="#" aria-label="Instagram" style={{fontFamily: 'var(--font-heading)', fontWeight: 'bold'}}>IG</a>
              <a href="#" aria-label="LinkedIn" style={{fontFamily: 'var(--font-heading)', fontWeight: 'bold'}}>IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio"><ChevronRight size={16} /> Inicio</a></li>
              <li><a href="#nosotros"><ChevronRight size={16} /> Nosotros</a></li>
              <li><a href="#servicios"><ChevronRight size={16} /> Nuestros Servicios</a></li>
              <li><a href="#flota"><ChevronRight size={16} /> Nuestra Flota</a></li>
              <li><a href="#contacto"><ChevronRight size={16} /> Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4 className="footer-title">Servicios</h4>
            <ul>
              <li><a href="#servicios"><ChevronRight size={16} /> Carga Pesada</a></li>
              <li><a href="#servicios"><ChevronRight size={16} /> Maquinaria y Equipos</a></li>
              <li><a href="#servicios"><ChevronRight size={16} /> Logística Integral</a></li>
              <li><a href="#servicios"><ChevronRight size={16} /> Proyectos Industriales</a></li>
              <li><a href="#servicios"><ChevronRight size={16} /> Distribución a Nivel Nacional</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-title">Contacto</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="contact-icon" size={20} />
                <span>Av. Los Transportistas 1234, Zona Industrial, Lima, Perú</span>
              </li>
              <li>
                <Phone className="contact-icon" size={20} />
                <div className="contact-details">
                  <span>+49 987 654 321</span>
                  <span>(01) 456-7890</span>
                </div>
              </li>
              <li>
                <Mail className="contact-icon" size={20} />
                <span>operaciones@villasac.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Transportes Villa SAC. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

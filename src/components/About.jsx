import React from 'react';
import { Target, Eye, Shield, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    { title: 'Seguridad', desc: 'Protocolos estrictos para salvaguardar su mercancía.', icon: <Shield size={24} /> },
    { title: 'Puntualidad', desc: 'Compromiso total con los tiempos de entrega pactados.', icon: <CheckCircle2 size={24} /> },
    { title: 'Confianza', desc: 'Transparencia y honestidad en todos nuestros procesos.', icon: <CheckCircle2 size={24} /> },
    { title: 'Eficiencia', desc: 'Rutas optimizadas y gestión logística inteligente.', icon: <CheckCircle2 size={24} /> }
  ];

  return (
    <section id="nosotros" className="about bg-light">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">
          Transportes Villa SAC es una empresa líder en el rubro de transporte de carga pesada a nivel nacional, con años de experiencia brindando soluciones logísticas de alta calidad.
        </p>

        <div className="about-grid">
          <div className="about-content">
            <h3 className="about-heading">Nuestra Historia</h3>
            <p>
              Fundada con el firme propósito de revolucionar el transporte terrestre en el país, Transportes Villa SAC nació para cubrir la necesidad de un servicio de carga pesada confiable, seguro y profesional.
            </p>
            <p>
              A lo largo de nuestra trayectoria, hemos consolidado alianzas estratégicas con empresas de los principales sectores económicos: minería, construcción y agroindustria, demostrando siempre nuestra capacidad operativa y respaldo institucional.
            </p>

            <div className="mission-vision">
              <div className="mv-card box-shadow-hover">
                <div className="mv-icon"><Target size={32} /></div>
                <h4>Misión</h4>
                <p>Brindar un servicio integral de transporte de carga terrestre, garantizando la seguridad, puntualidad y satisfacción de nuestros clientes, apoyados en tecnología de punta y un equipo humano altamente calificado.</p>
              </div>
              <div className="mv-card box-shadow-hover">
                <div className="mv-icon"><Eye size={32} /></div>
                <h4>Visión</h4>
                <p>Ser reconocidos como la empresa líder y el socio estratégico más confiable en el transporte de carga por carretera a nivel nacional, superando los estándares de calidad del mercado.</p>
              </div>
            </div>
          </div>
          
          <div className="about-values">
            <h3 className="about-heading">Nuestros Valores</h3>
            <div className="values-list">
              {values.map((val, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">{val.icon}</div>
                  <div className="value-text">
                    <h5>{val.title}</h5>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="why-us-box">
              <h4>¿Por qué elegirnos?</h4>
              <ul>
                <li><CheckCircle2 size={16} className="text-accent" /> Flota moderna y con mantenimiento constante</li>
                <li><CheckCircle2 size={16} className="text-accent" /> Monitoreo GPS 24/7 de sus cargas</li>
                <li><CheckCircle2 size={16} className="text-accent" /> Conductores capacitados e instruidos en seguridad</li>
                <li><CheckCircle2 size={16} className="text-accent" /> Pólizas de seguro de carga de amplia cobertura</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

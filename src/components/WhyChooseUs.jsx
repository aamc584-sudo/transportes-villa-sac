import React from 'react';
import { ShieldCheck, Clock, Award, Headset, CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Seguridad Integral', icon: <ShieldCheck size={32} /> },
    { title: 'Puntualidad Extrema', icon: <Clock size={32} /> },
    { title: 'Amplia Experiencia', icon: <Award size={32} /> },
    { title: 'Soporte 24/7', icon: <Headset size={32} /> },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="wcu-grid">
          <div className="wcu-text">
            <h2 className="wcu-title">¿Por Qué Elegirnos?</h2>
            <p className="wcu-desc">
              En Transporte Villa SAC no solo movemos carga, impulsamos el negocio de nuestros clientes. Nuestro compromiso va más allá del simple traslado de un punto A al punto B.
            </p>
            <ul className="wcu-list">
              <li><CheckCircle2 className="wcu-check" size={20} /> Entendemos la criticidad de su operación comercial.</li>
              <li><CheckCircle2 className="wcu-check" size={20} /> Personalizamos el servicio según el tipo de carga.</li>
              <li><CheckCircle2 className="wcu-check" size={20} /> Comunicación constante y reportes de ubicación en tiempo real.</li>
              <li><CheckCircle2 className="wcu-check" size={20} /> Respaldo financiero y pólizas de seguro de primer nivel.</li>
            </ul>
          </div>
          <div className="wcu-cards">
            {reasons.map((r, i) => (
              <div className="wcu-card" key={i}>
                <div className="wcu-icon">{r.icon}</div>
                <h4>{r.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

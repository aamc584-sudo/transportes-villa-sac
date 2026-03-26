import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jorge Mendoza',
      company: 'Constructora del Centro S.A.',
      text: 'Llevamos más de 5 años trabajando con Transportes Villa SAC. Su nivel de compromiso y la disponibilidad de su flota para nuestros proyectos de construcción ha sido fundamental para nuestro crecimiento.',
    },
    {
      name: 'Carmen Rodríguez',
      company: 'Agroexportaciones del Sur',
      text: 'Manejar productos perecibles requiere tiempos exactos y máximo cuidado. Villa SAC ha demostrado ser el socio logístico que necesitábamos para asegurar nuestra cadena de suministro.',
    },
    {
      name: 'Roberto Salazar',
      company: 'Ingeniería y Minas SAC',
      text: 'El traslado de nuestra maquinaria pesada exige estrictos protocolos de seguridad y escolta. Con ellos tenemos la tranquilidad de que nuestros equipos llegan impecables a los campamentos.',
    }
  ];

  return (
    <section className="testimonials bg-light">
      <div className="container">
        <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
        <p className="section-subtitle">
          El respaldo y la confianza de las empresas más importantes del país son nuestra mejor carta de presentación.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((test, i) => (
            <div className="testimonial-card" key={i}>
              <div className="test-quote-icon">
                <Quote size={40} />
              </div>
              <p className="test-text">"{test.text}"</p>
              <div className="test-stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <div className="test-author">
                <h4>{test.name}</h4>
                <span>{test.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

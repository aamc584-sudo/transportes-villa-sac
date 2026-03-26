import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    { title: 'Construcción', desc: 'Suministro a pie de obra.' },
    { title: 'Minería', desc: 'Rutas seguras a campamentos.' },
    { title: 'Industria', desc: 'Movilización de maquinaria general.' },
    { title: 'Comercio', desc: 'Retail y consumo masivo.' },
    { title: 'Agroindustria', desc: 'Traslado optimizado en campaña.' },
    { title: 'Proyectos Especiales', desc: 'Carga sobredimensionada.' }
  ];

  return (
    <section id="sectores" className="industries">
      <div className="container">
        <h2 className="section-title">Sectores que Atendemos</h2>
        <p className="section-subtitle">
          Experiencia comprobada movilizando la fuerza de las principales industrias del país.
        </p>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-card" key={i}>
              <div className="industry-content">
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

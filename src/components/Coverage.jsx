import React from 'react';
import { MapPin } from 'lucide-react';
import './Coverage.css';

const Coverage = () => {
  const routes = [
    { region: 'Costa', desc: 'Rutas desde Tumbes hasta Tacna, interconectando los principales puertos y ciudades costeras.' },
    { region: 'Sierra', desc: 'Acceso a proyectos mineros y ciudades de altura con equipos adaptados para zonas de difícil geografía.' },
    { region: 'Selva', desc: 'Logística bimodal (terrestre-fluvial) para el abastecimiento de operaciones en la amazonía.' }
  ];

  return (
    <section id="cobertura" className="coverage bg-light">
      <div className="container">
        <h2 className="section-title">Cobertura Nacional</h2>
        <p className="section-subtitle">
          Llegamos a cada rincón del Perú. Nuestra amplia red operativa y conocimiento de las rutas nacionales nos permite garantizar el éxito de cada envío.
        </p>

        <div className="coverage-content">
          <div className="coverage-map">
            <div className="map-placeholder">
              IMAGEN: MAPA DEL PERÚ CON RUTAS
            </div>
          </div>
          <div className="coverage-info">
            <h3 className="coverage-heading">Conectando el país de extremo a extremo</h3>
            <p className="coverage-desc">
              Gracias a nuestras bases logísticas estratégicamente ubicadas, optimizamos tiempos de tránsito y aseguramos soporte técnico en ruta ante cualquier eventualidad.
            </p>
            
            <div className="routes-list">
              {routes.map((route, i) => (
                <div className="route-item" key={i}>
                  <div className="route-icon"><MapPin size={24} /></div>
                  <div className="route-text">
                    <h4>{route.region}</h4>
                    <p>{route.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;

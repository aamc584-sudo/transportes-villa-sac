import React from 'react';
import { Settings, ShieldCheck, Zap } from 'lucide-react';
import fleetTruck from '../assets/fleet-truck.png';
import './Fleet.css';

const Fleet = () => {
  return (
    <section id="flota" className="fleet bg-light">
      <div className="container">
        <h2 className="section-title">Nuestra Flota</h2>
        <p className="section-subtitle">
          Unidades de transporte modernas y adecuadas para las exigencias logísticas actuales. Operatividad y capacidad que garantizan resultados.
        </p>

        <div className="fleet-content">
          <div className="fleet-image-container">
            <img src={fleetTruck} alt="Flota de camiones modernos de Transportes Villa SAC" className="fleet-image" />
          </div>
          <div className="fleet-text">
            <h3 className="fleet-heading">Capacidad y Operatividad Segura</h3>
            <p className="fleet-desc">
              En Transportes Villa SAC contamos con una flota constantemente renovada de tractocamiones, semirremolques, plataformas, furgones y camas bajas, listos para atender desde el traslado de mercadería general hasta maquinaria pesada de gran dimensión.
            </p>
            
            <div className="fleet-features">
              <div className="feature">
                <ShieldCheck className="feature-icon" size={28} />
                <div className="feature-text">
                  <h4>Altos Estándares de Seguridad</h4>
                  <p>Checklists previos de salida y telemetría avanzada para prevención de riesgos.</p>
                </div>
              </div>
              <div className="feature">
                <Settings className="feature-icon" size={28} />
                <div className="feature-text">
                  <h4>Mantenimiento Preventivo</h4>
                  <p>Talleres propios que garantizan la disponibilidad al 100% de la unidad.</p>
                </div>
              </div>
              <div className="feature">
                <Zap className="feature-icon" size={28} />
                <div className="feature-text">
                  <h4>Respuesta Inmediata</h4>
                  <p>Operativa ágil gracias a un equipo 24/7 disponible ante cualquier incidencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;

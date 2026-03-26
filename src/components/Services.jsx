import React from 'react';
import { Truck, Navigation, PackageSearch, PackageOpen, Factory, CalendarClock } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Transporte de Carga Pesada',
      desc: 'Traslado seguro de mercancías de gran volumen y peso a nivel nacional, con unidades preparadas para las rutas más exigentes del país.',
      icon: <Truck size={40} />
    },
    {
      title: 'Transporte de Maquinaria',
      desc: 'Servicio especializado en movilización de equipos y maquinaria pesada para los sectores de minería, construcción e industria.',
      icon: <Factory size={40} />
    },
    {
      title: 'Transporte Terrestre Nacional',
      desc: 'Amplia cobertura en costa, sierra y selva, garantizando que su producto llegue a su destino en las mejores condiciones.',
      icon: <Navigation size={40} />
    },
    {
      title: 'Servicio Logístico Integral',
      desc: 'Soluciones de cadena de suministro desde el recojo en almacén hasta la entrega al cliente final, optimizando costos y tiempos.',
      icon: <PackageSearch size={40} />
    },
    {
      title: 'Distribución y Traslado',
      desc: 'Flota versátil para la distribución de mercancía de diversos rubros, asegurando integridad en cada punto del recorrido.',
      icon: <PackageOpen size={40} />
    },
    {
      title: 'Rutas Programadas',
      desc: 'Organización de servicios especiales periódicos para abastecimiento continuo de sus operaciones, con total predictibilidad.',
      icon: <CalendarClock size={40} />
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones logísticas adaptadas a sus necesidades, diseñadas para brindarle tranquilidad, eficiencia y un servicio corporativo de primer nivel.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

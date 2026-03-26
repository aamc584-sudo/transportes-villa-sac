import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo puedo solicitar una cotización?',
      a: 'Puede solicitarla a través de nuestro formulario de contacto en esta misma página, enviando un correo a operaciones@villasac.com, o comunicándose directamente por WhatsApp a nuestro número de atención al cliente. Un asesor de ventas se contactará con usted en menos de 2 horas.'
    },
    {
      q: '¿Qué tipo de mercancía transportan?',
      a: 'Transportamos carga seca, maquinaria pesada, equipos industriales, materiales de construcción y mercancía general. No transportamos materiales altamente peligrosos no regulados sin previa evaluación, ni productos prohibidos por las leyes peruanas.'
    },
    {
      q: '¿Tienen cobertura a nivel nacional?',
      a: 'Sí, contamos con cobertura en costa, sierra y selva del Perú. Disponemos de unidades equipadas para diferentes geografías y bases de operaciones en zonas estratégicas.'
    },
    {
      q: '¿Toda carga viaja asegurada?',
      a: 'Sí, contamos con Póliza de Seguro de Responsabilidad Civil y Póliza de Seguro de Transporte Terrestre de carga, para garantizar la tranquilidad de nuestros clientes en todo el trayecto.'
    },
    {
      q: '¿Puedo hacer seguimiento a mi carga?',
      a: 'Absolutamente. Toda nuestra flota cuenta con sistema de monitoreo GPS en tiempo real 24/7. Brindamos a nuestros clientes acceso a la ubicación de sus despachos según la modalidad del servicio contratado.'
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <p className="section-subtitle">
          Resolvemos sus dudas principales para que tenga total claridad sobre nuestros servicios operativos.
        </p>

        <div className="faq-container">
          {faqs.map((faq, i) => (
            <div 
              className={`faq-item ${openIndex === i ? 'open' : ''}`} 
              key={i}
              onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                {openIndex === i ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

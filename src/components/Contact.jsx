import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente. Nos pondremos en contacto con usted a la brevedad.');
    setFormData({ nombre: '', empresa: '', telefono: '', correo: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contact bg-light">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          Estamos listos para atender sus requerimientos logísticos. Nuestro equipo de asesores comerciales le brindará la mejor solución.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-heading">Información de Contacto</h3>
            <p className="contact-desc">
              Comuníquese con nosotros para solicitar una cotización formal o resolver cualquier inquietud sobre nuestros servicios.
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><MapPin size={28} /></div>
                <div className="info-text">
                  <h4>Oficina Principal</h4>
                  <p>Av. Los Transportistas 1234, Zona Industrial, Lima, Perú.</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><Phone size={28} /></div>
                <div className="info-text">
                  <h4>Teléfonos</h4>
                  <p>+51 987 654 321</p>
                  <p>(01) 456-7890</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><Mail size={28} /></div>
                <div className="info-text">
                  <h4>Correo Institucional</h4>
                  <p>operaciones@villasac.com</p>
                  <p>cotizaciones@villasac.com</p>
                </div>
              </div>
            </div>

            <div className="whatsapp-box">
              <p>Atención Inmediata</p>
              <a href="#" className="btn btn-whatsapp">
                <MessageCircle size={20} className="mr-2" /> Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form-container" id="cotizar">
            <h3 className="contact-heading">Solicitar Cotización</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo *</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Ej. Juan Pérez" />
              </div>
              <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Ej. Minera Sur S.A." />
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono / Celular *</label>
                  <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder="+51 999 999 999" />
                </div>
                <div className="form-group">
                  <label htmlFor="correo">Correo Electrónico *</label>
                  <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required placeholder="juan@empresa.com" />
                </div>
              </div>
              <div className="form-group">
               <label htmlFor="mensaje">Mensaje o Detalle de Carga *</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="5" placeholder="Indique lugar de origen, destino y tipo de carga..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Enviar Mensaje <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

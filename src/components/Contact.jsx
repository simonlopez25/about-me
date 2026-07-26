import React from "react";

export function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container contact-card">
        <h2>¿Conectamos?</h2>
        <p className="section-subtitle">
          Estoy abierto a oportunidades de colaboración, proyectos o simplemente
          a hablar sobre tecnología e IA. ¡Escríbeme!
        </p>
        <div className="contact-actions">
          <a
            href="mailto:simonlopezsaldarroaga@gmail.com"
            className="btn-primary"
          >
            Enviar Correo
          </a>
          <a
            href="https://github.com/simonlopez25"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/simon-lopez-a478bb235"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

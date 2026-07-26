import React from 'react';

export const About = () => {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="about-container">
        
        <div className="about-header">
          <h2>Sobre Mí</h2>
          <div className="about-line"></div>
        </div>

        <div className="about-content">
          <p className="about-description">
            ¡Hola! Soy <b>Simón López</b>, estudiante de desarrollo de software en plena formación. 
            Creo firmemente que los grandes proyectos no se construyen de la noche a la mañana, 
            sino a base de constancia, orden y resiliencia—como <b>la gota que, gota a gota, termina rompiendo la roca</b>.
          </p>
          
          <p className="about-description">
            Me apasiona estructurar cada línea de código con propósito y marcarme metas claras. Actualmente me estoy 
            formando como desarrollador <strong>Full-Stack potenciado con Inteligencia Artificial</strong>, integrando el desarrollo 
            web moderno (frontend y backend) con el uso estratégico de herramientas de IA para construir soluciones eficientes y escalables.
          </p>

          <div className="learning-card">
            <span className="pulsing-dot"></span>
            <div className="learning-text">
              <strong>Actualmente explorando:</strong> Arquitectura Full-Stack, patrones de diseño en React, conexión de bases de datos 
              y optimización de flujos de trabajo asistidos por IA.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
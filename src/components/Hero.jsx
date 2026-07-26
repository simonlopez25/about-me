import React, { useState, useEffect } from 'react';
import myPicture from '../assets/img/myPicture.png';

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "¡Hola, Simón López Saldarriaga!";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content-wrapper">
        <div className="hero-text-container">
          <span className="badge">Full-Stack Developer in Training</span>
          
          <h1 className="hero-title">
            {displayedText}
            <span className="typing-cursor">|</span>
          </h1>

          <p className="hero-description">
            Estudiante apasionado por el desarrollo full-stack y la integración de inteligencia artificial. 
            Transformo ideas en soluciones web interactivas, limpias y escalables.
          </p>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            <img 
              src={myPicture} 
              alt="Fotografía de Simón López Saldarriaga" 
              className="hero-avatar" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
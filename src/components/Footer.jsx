import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo-text">SLS</span>
          <p className="footer-tagline">
            Construyendo experiencias web limpias y escalables.
          </p>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Simón López. Todos los derechos reservados.
          </p>
          <a href="#inicio" className="footer-back-to-top">
            Volver arriba &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

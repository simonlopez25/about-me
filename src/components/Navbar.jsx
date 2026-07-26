import React from "react";
import logoType from "../assets/img/logoType.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#inicio" className="nav-logo">
          <img
            src={logoType}
            alt="Logo de Simón López"
            className="nav-logo-img"
          />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto" className="nav-contact-btn">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

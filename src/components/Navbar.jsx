import React from "react";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#inicio" className="nav-logo">
          Simón López
        </a>
        <ul className="nav-links">
          <li>
            <a href="#habilidades">Habilidades</a>
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

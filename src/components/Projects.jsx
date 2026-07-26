import React from "react";

export function Projects() {
  const featuredProject = {
    title: "Portafolio Personal (Full-Stack in Training)",
    description:
      "Aplicación web modular desarrollada con React, Vite y CSS Moderno. Diseñada bajo estrictas buenas prácticas de arquitectura frontend, componentes limpios, escalables y optimizada específicamente para destacar ante reclutadores técnicos.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS Moderno",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/simonlopez25",
  };

  return (
    <section className="projects-section" id="proyectos">
      <div className="container">
        <div className="section-header-center">
          <h2>Proyecto Destacado</h2>
          <p className="section-subtitle">
            El corazón de mi evolución actual como desarrollador: código limpio,
            modular y arquitectura moderna.
          </p>
        </div>

        <div className="projects-single-grid">
          <div className="project-card-featured">
            <div className="project-card-content">
              <span className="project-badge">Arquitectura Frontend</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>

              <div className="project-tech-list">
                {featuredProject.technologies.map((tech, techIndex) => (
                  <span className="tech-badge" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explorar Código en GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

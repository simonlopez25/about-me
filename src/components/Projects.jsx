import React from 'react';

export function Projects() {
  const projectList = [
    {
      title: "Portafolio Personal",
      description: "Aplicación web modular desarrollada con React, Vite y CSS Moderno, diseñada con buenas prácticas de arquitectura frontend y adaptada para reclutadores.",
      technologies: ["React", "JavaScript", "Vite", "CSS Moderno"],
      githubUrl: "https://github.com/simonlopez25" 
    },
    {
      title: "Próximo Proyecto / Práctica",
      description: "Espacio reservado para tu siguiente gran desarrollo. Aquí podrás mostrar integraciones con APIs, bases de datos o lógica avanzada.",
      technologies: ["JavaScript", "APIs", "En desarrollo"],
      githubUrl: "https://github.com/simonlopez25"
    }
  ];

  return (
    <section className="projects-section" id="proyectos">
      <div className="container">
        <div className="section-header-center">
          <h2>Proyectos Destacados</h2>
          <p className="section-subtitle">
            Trabajos y aplicaciones que reflejan mi evolución y pasión como desarrollador web.
          </p>
        </div>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-badge" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Ver Código en GitHub &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
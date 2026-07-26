import React from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3 / Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Vite",
      ],
    },
    {
      title: "Backend & Lenguajes",
      skills: ["Java"],
    },
    {
      title: "Diseño & Prototipado",
      skills: ["Figma"],
    },
    {
      title: "Control de Versiones & Herramientas",
      skills: ["Git", "GitHub", "VS Code", "npm"],
    },
  ];

  return (
    <section className="skills-section" id="habilidades">
      <div className="container">
        <h2>Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Tecnologías, lenguajes y herramientas que utilizo para construir
          soluciones web completas.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li className="skill-tag" key={skillIndex}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

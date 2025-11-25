import React from "react";

function Skills() {
  const skills = [
    { name: "HTML, CSS, JavaScript", level: 75 },
    { name: "React.js", level: 10 },
    { name: "SQL", level: 70 },
    { name: "Basic Electrical Repair", level: 88 },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/profile-ko.jpg"
          alt="Gabriel Guyl R. Porteza"
          className="about-pic"
        />
        <div className="about-card">
          <h3>Hi! I’m Gabriel Guyl R. Porteza</h3>
          <p><strong>Goal:</strong> To become a professional Web Developer in the Future</p>
          <p><strong>Hobbies:</strong> Eating spicy foods, watching anime, playing games</p>
          <p><strong>Skills:</strong> HTML, CSS, JavaScript, React.js, SQL</p>
          <p><strong>Location:</strong> Philippines</p>
        </div>
      </div>
    </section>
  );
}

export default About;

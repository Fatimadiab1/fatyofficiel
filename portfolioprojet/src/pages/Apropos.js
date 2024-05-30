import React, { useEffect } from 'react';
import '../styles/Apropos.css'; 
import Image2 from '../assets/Image2.png';
// Page a propos
function Apropos() {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.skill');
    let delay = 0;
    progressBars.forEach((progress, index) => {
      setTimeout(() => {
        progress.classList.add('show'); 
      }, delay);
      delay += 300; 
    });
  }, []); 

  return (
    <div className="gradient-background apropos-container">
      <div className="image-container2">
        <img src={Image2} alt="Profile" />
      </div>
      <div className="text-container2">
        <h1>A propos de moi !</h1>
        <p>
          Depuis toujours passionnée par la technologie, j'ai suivi un parcours pour devenir développeuse web full stack. Aujourd'hui, je crée des applications robustes et intuitives, maîtrisant à la fois le front-end et le back-end avec des outils comme HTML, CSS, JavaScript, React.js, et les bases de données.
        </p>
        <br></br>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <span>HTML/CSS</span>
            <progress max="100" value="100">100%</progress>
          </div>
          <div className="skill">
            <span>PHP/LARAVEL</span>
            <progress max="100" value="95">95%</progress>
          </div>
          <div className="skill">
            <span>JAVASCRIPT</span>
            <progress max="100" value="90">90%</progress>
          </div>
          <div className="skill">
            <span>REACT.JS</span>
            <progress max="100" value="85">85%</progress>
          </div>
          <div className="skill">
            <span>DATA BASE</span>
            <progress max="100" value="100">100%</progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;


import React from 'react';
import '../styles/Projet.css'; 
import Yango from '../assets/Yango.png'; 
import Artiste from '../assets/Artiste.png'; 
import Barca from '../assets/Barca.png';
// Page de Projet
function Projet() {
  return (

<div>
    <h1 className='pro'>Découvrons mes différents projets !:</h1>
    <div className="project-container">
      
      {/* Première carte */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Yango} alt="Yango" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="flip-card-back">
            <h2 className='titre'>Yango Abidjan</h2>
            <p>Réaliser en deuxième année de développement web</p>
            <a href="https://fatimadiab1.github.io/Yangoofficiel/" target="_blank" rel="noopener noreferrer">Visiter le site web</a>
          </div>
        </div>
      </div>

      {/* Deuxième carte */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Artiste} alt="Artiste" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="flip-card-back">
            <h2 className='titre'>Fior De Bior</h2>
            <p>Réaliser en fin de première année</p>
            <a href="https://fatimadiab1.github.io/fiordebior/" target="_blank" rel="noopener noreferrer">Visitez le site web</a>
          </div>
        </div>
      </div>

      {/* Troisième carte */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Barca} alt="Barca" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="flip-card-back">
            <h2 className='titre'>Fc Barcelone</h2>
            <p>Réaliser en deuxième année de développement web</p>
            <a href="https://fatimadiab1.github.io/barcelonefc/" target="_blank" rel="noopener noreferrer">Visitez le site web</a>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default Projet;

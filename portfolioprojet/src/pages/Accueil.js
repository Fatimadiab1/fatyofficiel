import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Accueil.css';
import Image from '../assets/Image.png';
import CV from '../assets/Cv.pdf';

// Page d'acccueil
function Accueil() {
  return (
    <div className="gradient-background accueil-container">
      <div className="text-container">
        <h1>Coucou! Je m'appelle Faty,<br /> je suis développeuse<br /> Full Stack</h1>
        <p>Ceci est mon portfolio en ligne.</p>
        <div className="button-group">
          <a href={CV} download="Cv.pdf">
            <button className="button">Télécharger CV</button>
          </a>
          <Link to="/apropos">
            <button className="button">En savoir plus</button>
          </Link>
        </div>
        <div className="icon-group">
          <a href="https://www.instagram.com/diab.touma?igsh=MXhkazU2eDc4OWdmOQ=="><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/2250779771616"><i className="fab fa-whatsapp"></i></a>
          <a href="lien_site_web" ><i className="fas fa-globe"></i></a>
          <a href="https://www.facebook.com/touma.diab.9/?locale=fr_FR" ><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/fatima-diab-68bab5273?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh%2B62hUerTOOMbwXa%2Fv9Ysw%3D%3D" ><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="image-container">
        <img src={Image} alt="Imag" />
      </div>
    </div>
  );
}

export default Accueil;

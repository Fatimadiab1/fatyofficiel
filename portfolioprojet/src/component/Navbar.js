import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../styles/Navbar.css';
// Le composant Navabar
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/apropos">A propos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projet">Projets</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuDropdown() {
  return (
    <header className="header">
        <div className="container mx-auto">
          <div className="logo">
            <a href="#" className="logo-link">
            <img src="/images/logo-ivan.png" className="logo-img" alt="Logo Ivan Arasco Desarrollador Web" />
            </a>
          </div>
        <nav className="menu">
            <ul>
              <li>
                <a href="#"> Mi CV </a>
              </li>
              <li className="has-dropdown">
                <a href="#"> Aficiones {<ExpandMoreIcon />} </a>
                  <ul className="dropdown-parent">
                    <li className="dropdown-child"> <a href="#"> Relatos </a></li>
                    <li className="dropdown-child"> <a href="#"> Películas / Series</a></li>
                    <li className="dropdown-child"> <a href="#"> Juegos</a></li>
                    <li className="dropdown-child"> <a href="#"> Viajes</a></li>
                    <li className="dropdown-child"> <a href="#"> Música</a></li>
                  </ul>
              </li>
              <li>
                <a href="#"> Sobre Mi </a>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
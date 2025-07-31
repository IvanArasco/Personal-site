import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuDropdown() {
  return (
    <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/" className="logo-link">
            <img src="/images/logo-ivan.webp" className="logo-img" alt="Logo con el nombre de Ivan Arasco y debajo Desarrollador Web" />
            </a>
          </div>
        <nav className="menu">
            <ul>
              <li>
                <a href="/cv"> Mi CV </a>
              </li>
              <li className="has-dropdown">
                <a href="#"> Aficiones {<ExpandMoreIcon />} </a>
                  <ul className="dropdown-parent">
                    <li className="dropdown-child"> <a href="/books"> Relatos </a></li>
                    <li className="dropdown-child"> <a href="/cinema"> Películas / Series</a></li>
                    <li className="dropdown-child"> <a href="/games"> Juegos</a></li>
                    <li className="dropdown-child"> <a href="/journeys"> Viajes</a></li>
                    <li className="dropdown-child"> <a href="/music"> Música</a></li>
                  </ul>
              </li>
              <li>
                <a href="/about"> Sobre Mi </a>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuDropdown() {
  return (
    <header class="header">
      <nav className="menu">
        <div className="container mx-auto">
          <ul>
            <li>
              <a href="#"> Mi CV </a>
            </li>
            <li className="has-dropdown">
              <a href="#"> Aficiones {<ExpandMoreIcon />} </a>
                <ul className="dropdown-parent">
                  <li className="dropdown-child">Relatos</li>
                  <li className="dropdown-child">Películas / Series</li>
                  <li className="dropdown-child">Juegos</li>
                  <li className="dropdown-child">Viajes</li>
                  <li className="dropdown-child">Música</li>
                </ul>
            </li>
            <li>
              <a href="#"> Sobre Mi </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
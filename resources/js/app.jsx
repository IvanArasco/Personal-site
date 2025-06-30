import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sass/app.scss';

import MuiButton from './components/mui-button';
import MuiAccordion from './components/mui-accordion';
import Drawer from './components/mui-drawer';
import BlockHeader from "./components/block-header";
import MenuDropdown from './components/block-nav-menu';
import BlockValues from "./components/block-values";
import BlockFooter from "./components/block-footer";

const values = [
    {
      title: 'Programador Web y Multiplataforma',
      description: (
        <>
          Mi portfolio de proyectos web:{' '}
          <a href="https://github.com/IvanArasco" target="_blank" rel="noopener noreferrer">
            https://github.com/IvanArasco
          </a>
        </>
      ),
    },
    {
      title: 'Conocimientos técnicos',
      description: 'PHP, Java, C#, React, Javascript.',
    },
    {
      title: 'Hago realidad la web de tus sueños',
      description: 'O eso intento.',
    },
  ];

function App() {
  return (
    <>
      <MenuDropdown/>
      
      <BlockHeader />

      <BlockValues values={values} />

      <Drawer/>

      <MuiAccordion accordionTitle="Primer acordeón" content="Es un portfolio autobiográfico hecho con Laravel y React con la librería Material." />

      <MuiAccordion accordionTitle="Segundo acordeón" content="Este es el segundo acordeón, expandido por defecto y con botones." 
        buttonTitleOne="Aceptar" buttonTitleTwo="Cancelar" expanded hasButtons/>

      <MuiButton title="Púlsame"/>

      <BlockFooter />

    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

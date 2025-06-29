import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sass/app.scss';

import MuiButton from './components/mui-button';
import MuiAccordion from './components/mui-accordion';
import Drawer from './components/mui-drawer';
import MenuDropdown from './components/block-nav-menu';
import InfoBlock from "./components/block-info";
import Header from "./components/block-header";

function App() {
  return (
    <>
      <MenuDropdown/>
      
      <Header />

      <Drawer/>

      <InfoBlock title="Sobre mí" content="Soy Iván, desarrollador web y multiplataforma." />

      <InfoBlock title="Este proyecto" content="Es un portfolio autobiográfico hecho con Laravel y React con la librería Material." />

      <MuiAccordion accordionTitle="Primer acordeón" content="Es un portfolio autobiográfico hecho con Laravel y React con la librería Material." />

      <MuiAccordion accordionTitle="Segundo acordeón" content="Este es el segundo acordeón, expandido por defecto y con botones." 
        buttonTitleOne="Aceptar" buttonTitleTwo="Cancelar" expanded hasButtons/>

      <MuiButton title="Púlsame"/>

    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

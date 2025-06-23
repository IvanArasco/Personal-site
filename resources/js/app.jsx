import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sass/app.scss';

import MuiButton from './components/MUIButton';
import MuiAccordion from './components/muiAccordion';
import Drawer from './components/muiDrawer';
import MenuDropdown from './components/nav-menu-dropdown';
import InfoBlock from "./components/InfoBlock";

function App() {
  return (
    <>

      <MenuDropdown/>

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

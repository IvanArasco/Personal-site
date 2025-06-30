import ReactDOM from 'react-dom/client';
import '../sass/app.scss';

import BlockHeader from "./components/block-header";
import MenuDropdown from './components/block-nav-menu';
import BlockValues from "./components/block-values";
import BlockFooter from "./components/block-footer";
import MuiAccordion from './components/mui-accordion';
import CardImageContent from "./components/mui-card";
import Drawer from './components/mui-drawer';

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
      
      <BlockHeader title="Mi sitio personal" content="Es un portfolio autobiográfico desarrollado en Laravel y React con la librería Material."/>

      <BlockValues values={values} />

      <Drawer/>

      <CardImageContent title="Mi sitio personal" content="Mi sitio personal"/>

      <CardImageContent title="Mi sitio personal 2" content="Mi sitio personal 2"/>

      <MuiAccordion accordionTitle="Primer acordeón" content="Portfolio autobiográfico desarrollado con Laravel y React con la librería Material." />

      <MuiAccordion accordionTitle="Segundo acordeón" content="Este es el segundo acordeón, expandido por defecto y con botones." 
        buttonTitleOne="Aceptar" buttonTitleTwo="Cancelar" expanded hasButtons/>

      <BlockFooter title="Footer - 2025 Iván Arasco"/>

    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

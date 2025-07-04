
import '../../sass/app.scss';

import BlockHeader from ".././components/Block-header";
import BlockValues from ".././components/Block-values";
import RandomCards from ".././components/Block-random-cards";
import MuiAccordion from '.././components/Mui-accordion';
import Drawer from '.././components/Mui-drawer';

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

export default function Home() {
  return (
    <>
        <BlockHeader title="Mi sitio personal" content="Es un portfolio autobiográfico desarrollado en Laravel y React con la librería Material."/>

        <BlockValues values={values} />

        <RandomCards/>

        <Drawer/>

        <MuiAccordion accordionTitle="Primer acordeón" content="Portfolio autobiográfico desarrollado con Laravel y React con la librería Material." />

        <MuiAccordion accordionTitle="Segundo acordeón" content="Este es el segundo acordeón, expandido por defecto y con botones." 
        buttonTitleOne="Aceptar" buttonTitleTwo="Cancelar" expanded hasButtons/>
    </>
  );
}
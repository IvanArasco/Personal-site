
import '../../sass/app.scss';

import BlockHeader from "../components/Block-header";
import PlainText from "../components/Block-plaintext";
import MuiAccordion from '../components/Mui-accordion';
import Drawer from '../components/Mui-drawer';

export default function About() {
  return (
    <>
      <BlockHeader bgImage="images/leaf02.webp" title="Sobre Mi"/>

      <PlainText title="Editores de videojuegos" content=
      "Mis inicios en el mundo de la programación fueron con los editores de videojuegos como Warcraft o Imperium. La imagen adjunta debajo muestra la interfaz del editor del primero (está pensado para ser amigable con quienes no se dedican a la programación):"
      imagedata={{ src: "images/warcraft-editor.png", title: "Imagen del editor de detonadores de Warcraft" }}/>

      <PlainText title="Arduino" content="Un día apareció en mi feed de YouTube algo llamado 'Arduino'. Juntar la electrónica y la programación me pareció muy interesante, y por ello compré el starter kit. Creé un pequeño ventilador con un servo-motor, hice un semáforo con leds y alguna cosa más."  imagedata={{ src: "images/arduino-starter-kit.webp", title: "Starter Kit Arduino" }}/>
      <PlainText title="Unity, C#" content="Se presentó la oportunidad de hacer un curso de Unity donde pude desarrollar un pequeño juego de plataformas tan básico que no lo llegué a guardar. La programación de videojuegos siempre me ha llamado, sin embargo, acabé por entrar al mundo web porque tendría más salidas." />
      <PlainText title="Escritura y Rol" content="Además de viajar, escuchar música y ver películas y series, también me gusta escribir. Soy un apasionado del Rol, pero no el de mesa, sino en plataformas donde la narrativa cobra un peso mayor y se ofrecen herramientas que permiten escenificar lo que se desata en la imaginación." imagedata={{ src: "images/quill-pen-old-book.webp", title: "Libro con una pluma de escribir encima." }}/>
      <PlainText title="Aspiraciones" content="Me gustaría adquirir más conocimientos como para poder dedicarme a la enseñanza el día de mañana o como team leader / project leader. Aunque no sea lo mismo, he gestionado grupos entre diez y veinticinco personas donde debía tomar el rol de líder, organizar, delegar y responsabilizarme del resultado global. Me gustan los retos, especialmente los que ayudan a crecer como persona y experimentar distintos puntos de vista." />

      <PlainText title="Mi experiencia" content=
        {
          <p>
          Puedes encontrar mi currículum aquí:{" "}
          <a 
            href="/cv/iam_cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Mi CV
          </a>
          </p>
        }
       />

      <MuiAccordion accordionTitle="Acordeón" buttonTitleOne="Aceptar" buttonTitleTwo="Cancelar" hasButtons
        content={
          <p></p>
        }
      />
      
      <Drawer/>

    </>
  );
}
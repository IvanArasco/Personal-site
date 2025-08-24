
import '../../sass/app.scss';

import BlockHeader from "../components/Block-header";
import BlockValues from "../components/Block-values";
import RandomCards from "../components/Block-random-cards";
import {values} from "../data/values";

export default function Home() {
  return (
    <>
        <BlockHeader title="Mi sitio personal" content="Bienvenidos/as a mi portfolio autobiográfico desarrollado en Laravel y React con la librería Material."/>

        <BlockValues values={values} />

        <RandomCards/>
    </>
  );
}
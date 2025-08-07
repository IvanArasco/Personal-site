
import '../../sass/app.scss';

import BlockHeader from ".././components/Block-header";

import Gallery from ".././components/Mui-gallery";

export default function Journey() {
  return (
    <>
      <BlockHeader title="Viajes" content="Contenido sobre mis viajes más destacables"/>

      <Gallery />
    </>
  );
}
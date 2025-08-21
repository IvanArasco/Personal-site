
import '../../sass/app.scss';
import { useState } from "react";

import BlockHeader from "../components/Block-header";

import Gallery from "../components/Mui-gallery";
import Selector from "../components/Mui-selector";
import { dataSet } from "../data/dataset";

const places = [...new Set(dataSet.map(data => data.place))]; // Collection that shows unique place names.

export default function Journey() {

  const [selectedPlace, setSelectedPlace] = useState("");

  const filteredData = selectedPlace // DataSet filtered by selectedPlace (selection from selector)
    ? dataSet.filter(item => item.place === selectedPlace)
    : dataSet;

  return (
    <>
      <BlockHeader title="Viajes" content="Contenido sobre mis viajes más destacables"/>

      <Selector places={places} 
        selectedPlace={selectedPlace} 
        onChange={setSelectedPlace} />  

      <Gallery dataSet={filteredData} cols="3" />
    </>
  );
}

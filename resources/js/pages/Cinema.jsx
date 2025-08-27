
import '../../sass/app.scss';

import BlockHeader from "../components/Block-header";
import EmbedContainer from "../components/Block-embed";
import { films } from "../data/filmData";

export default function Cinema() {
  return (
    <>
    <BlockHeader title="Pelis / Series" content="Algunas de las películas y series que más recomendaría..."/>
      <div className="container">
          <div className="row">
              {films.map((film, index) => (
              <div className="col-4 col-lg-4 col-md-12 col-sm-12">
              <EmbedContainer
                key={index}
                title={film.title}
                description={film.description}
                link={film.img}
              />
              </div>
              ))}
          </div>
        </div>
    </>
  );
}

import '../../sass/app.scss';

import BlockHeader from "../components/Block-header";
import EmbedContainer from "../components/Block-embed";
import { songs } from "../data/audioData";

export default function Music() {
  return (
    <>
      <BlockHeader title="Música" content="Algunas de mis canciones favoritas..."/>
      <div className="container">
        <div className="row">
            {songs.map((song, index) => (
            <div className="col-4 col-lg-4 col-md-12 col-sm-12">
            <EmbedContainer
              key={index}
              title={song.title}
              description={song.description}
              link={song.link}
            />
            </div>
            ))}
        </div>
      </div>
    </>
  );
}
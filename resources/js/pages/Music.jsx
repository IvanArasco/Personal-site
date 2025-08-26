
import '../../sass/app.scss';

import BlockHeader from "../components/Block-header";
import MusicContainer from "../components/Block-music";
import { songs } from "../data/audioData";

export default function Music() {
  return (
    <>
      <BlockHeader title="Música" content="Algunas de mis canciones favoritas..."/>
      <div className="container">
        <div class="row">
            {songs.map((song, index) => (
            <div class="col-4 col-md-12 col-sm-12">
            <MusicContainer
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
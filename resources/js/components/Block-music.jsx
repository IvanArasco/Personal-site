import * as React from 'react';

export default function MusicContainer({title, description, link}) {
  return (
    <>
    <div className="block-wrapper music-item">
      <h2 className="song-title">{title}</h2>
      <div className="block-description">
          {description}
      </div>
      <iframe
          src={link}
          title={title}
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
      ></iframe>
    </div>
    </>
  );
}
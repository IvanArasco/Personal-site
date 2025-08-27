import * as React from 'react';

export default function EmbedContainer({ title, description, link }) {
  const isImage = link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.gif') || link.endsWith('.webp'); // test file extension

  return (
    <div className="block-wrapper embed-item">
      <h2 className="embed-title">{title}</h2>
      <div className="block-description">{description}</div>

      {isImage ? (
        <img src={link} alt={title} />
      ) : (
        <iframe
          src={link}
          title={title}
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

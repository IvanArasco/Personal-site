import * as React from 'react';

export default function BlockPlainText({ title, content, imagedata }) {
  return (
    <div className="block-wrapper block-plaintext">
      <div className="container">
        <h2 className="block-title">{title}</h2>
        <div className="block-description">
          <p>{content}</p>
        </div>

        {imagedata 
          ? <img src={imagedata.src} alt={imagedata.title} /> 
          : null}
      </div>
    </div>
  );
}

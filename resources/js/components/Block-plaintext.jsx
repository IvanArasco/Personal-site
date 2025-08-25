import * as React from 'react';

export default function BlockPlainText({ title, content, imagedata }) {
  return (
    <div className="block-wrapper block-plaintext">
      <div className="container">
          <div className="block-in-wrapper">
            <div className="row">
            <div className={"block-text-wrapper " + (imagedata ? "col-6" : "col-12")}>
              <h2 className="block-title">{title}</h2>
              <div className="block-description">
                {content}
              </div>
            </div>
            {
              imagedata ? <div className="block-image-wrapper col-6"> <img src={imagedata.src} alt={imagedata.title} /> </div>: null
            }
          </div>
        </div>
      </div>
    </div> 
  );
}

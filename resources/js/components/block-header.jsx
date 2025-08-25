import React from 'react';

export default function BlockHeader({ title, content, bgImage}) {
  bgImage = bgImage ? bgImage : 'images/background.webp';
  return (
    <div className="block-header" style={{ backgroundImage: 'url(' + bgImage + ')' }}>
        <div className="container">
            <div className="block-in-wrapper">
                <h1 className="block-title">{title}</h1>
                <div className="block-description">
                    <p> {content}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

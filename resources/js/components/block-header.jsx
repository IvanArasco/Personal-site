import React from 'react';

export default function BlockHeader({ title, content }) {
  return (
    <div className="block-header">
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

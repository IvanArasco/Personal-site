import React from 'react';

export default function BlockFooter({title, content}) {
  return (
    <footer className="block-wrapper block-footer">
        <div className="container mx-auto">
            <div className="block-in-wrapper">
                <h2 className="block-title">{title}</h2>
                <div className="block-description">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

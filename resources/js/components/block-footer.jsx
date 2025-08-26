import React from 'react';
import Button from '@mui/material/Button';

export default function BlockFooter({title, content}) {
  return (
    <footer className="block-wrapper block-footer">
        <div className="container mx-auto">
            <div className="block-in-wrapper">
                <h2 className="block-title">{title}</h2>
                <div className="block-description">
                    <p>{content}</p>
                </div>
             <Button variant="contained" component="a" href="/about" rel="noopener noreferrer"> Conóceme </Button>
            </div>
        </div>
    </footer>
  );
}

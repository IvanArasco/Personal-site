import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function CardImageContent({title, content, image, url}) {
  return (
      <div className="block-card">
        <Card className="card">
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent className="cardContent">
            <div className="block-in-wrapper">
              <h1 className="block-title">{title}</h1>
              <div className="block-description">
                  <p> {content}</p>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" href={url}>Saber más</Button>
          </CardActions>
          </Card>
      </div>
    
  );
}
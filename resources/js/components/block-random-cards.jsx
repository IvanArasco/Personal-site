import React, { useEffect, useState } from 'react';
import CardImageContent from './mui-card';

export default function RandomCards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/dynamic-content')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error al obtener contenido dinámico:', err));
  }, []);

  return (
    <>
    <div className="block-wrapper block-random-cards">
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-12 col-sm-12">
              <CardImageContent
                title={item.title}
                content={item.description}
                image={item.image}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
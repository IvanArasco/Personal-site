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
      {items.map((item, index) => (
        <CardImageContent
          key={index}
          title={item.title}
          content={item.description}
          image={item.image}
          url={item.url}
        />
      ))}
    </>
  );
}
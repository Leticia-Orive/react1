
import React from 'react';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
  // Suponiendo que 'shoe.image' contiene el nombre del archivo de imagen (por ejemplo, 'zapato1.jpg')
  const imagenUrl = require(`../imagenes/${shoe.image}`).default;

  return (
    <div className="shoe-card">
      <img src={imagenUrl} alt={shoe.name} />
      <h3>{shoe.name}</h3>
      <p>{shoe.price}</p>
      <Link to={`/productos/${shoe.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default ShoeCard;

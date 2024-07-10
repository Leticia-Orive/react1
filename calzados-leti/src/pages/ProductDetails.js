import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    axios.get(`http://tu-dominio.com/api/zapatos/${id}`)
      .then(response => setShoe(response.data))
      .catch(error => console.error('Error fetching shoe data:', error));
  }, [id]);

  if (!shoe) return <p>Cargando...</p>;

  let shoeImage;
  try {
    shoeImage = require(`../imagenes/${shoe.image}`).default;
  } catch (err) {
    shoeImage = null; // Manejar el caso en el que la imagen no exista
  }

  return (
    <div>
      {shoeImage ? (
        <img src={shoeImage} alt={shoe.name} />
      ) : (
        <p>Imagen no disponible</p>
      )}
      <h2>{shoe.name}</h2>
      <p>{shoe.description}</p>
      <p>{shoe.price}</p>
    </div>
  );
};

export default ProductDetails;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShoeCard from '../components/ShoeCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulamos la carga de productos desde una API
    axios.get('http://tu-dominio.com/api/productos')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home">
      <h2>Productos Disponibles</h2>
      <div className="product-list">
        {products.map(product => (
          <ShoeCard key={product.id} shoe={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Branchs.css';
import forwomen from '../../../assets/sport women2.jpg';
import Card from '../Cards/Card';

// Define an interface for the products (characters) you're fetching
interface Producto {
  id: number;
  name: string;
  species: string;
  image: string;
  gender: string;
}

const Branchs: React.FC = () => {
  // Use the defined interface for the state type
  const [Productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setProductos(response.data.results); // TypeScript now knows the structure of the data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='body-container'>
      <img src={forwomen} alt="" />
      <h2>Marcas</h2>
      <div className='WomencardsContainer'>
        {Productos.map((producto) => (
          <Card
            key={producto.id}
            name={producto.name}
            species={producto.species}
            image={producto.image}
            gender={producto.gender}
          />
        ))}
      </div>
    </div>
  );
};

export default Branchs;

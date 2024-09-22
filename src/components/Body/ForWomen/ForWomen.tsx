import React from 'react';
import Card from '../Cards/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ForWomen.css'
import forwomen from '../../../assets/sport women2.jpg'

const ForWomen: React.FC = () => {
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setProductos(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='body-container'>
      <img src={forwomen} alt="" />
      <h2>Ropa para Mujeres</h2>
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

export default ForWomen;

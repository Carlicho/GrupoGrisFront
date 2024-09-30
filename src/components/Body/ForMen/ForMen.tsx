import React from 'react';
import Card from '../Cards/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ForMen.css'
import formen from '../../../assets/formen.jpg'

const ForMen: React.FC = () => {
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
            <img src={formen} alt="" />
      <h2>Ropa para Hombres</h2>
      <div className='MencardsContainer '> 

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

export default ForMen;

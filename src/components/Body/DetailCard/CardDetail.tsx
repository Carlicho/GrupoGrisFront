import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      console.log('ID from useParams:', id);

      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          if (response.data) {
            setProducto(response.data);
            setError(null);
          } else {
            setError('No se encontró el personaje');
          }
        })
        .catch(error => {
          setError('Error fetching data');
          console.error('Error fetching data:', error);
        });
    } else {
      setError('ID no proporcionado');
    }
  }, [id]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : producto ? (
        <div>
          <h2>Detalles de la Carta {producto.name}</h2>
          <p>Especie: {producto.species}</p>
          <p>Género: {producto.gender}</p>
          <img src={producto.image} alt={producto.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetail;

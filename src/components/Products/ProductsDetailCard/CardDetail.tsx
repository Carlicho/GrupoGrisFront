import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CardDetail.css';

interface Character {
  id: number;
  name: string;
  species: string;
  gender?: string;
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
  }, [id]); // Removed unnecessary return statement

  return (
    <div className='DetailContainer'>
 
      {error && <p>{error}</p>}
      {producto ? (
         <div className='cardDetailContainer'>

                      

                                  <img className='cardDetailImg' src={producto.image} alt={producto.name} />
          
                      


                      <div className='infoCardDetail'>

                              <div className='cardDetailInfo'>
                                
                                      <h3>{producto.name}</h3>
                                          {producto.species}
                                        <p>$5400</p>
                                        <h2>mas detalles sobre el producto</h2>
                                        <p>Talle</p>
                                        <p>color</p>
                                        <p>Stock Disponible</p>
                                        <p>Cantidad</p>
                                        
                                      
                                
                                </div>
                
                      </div>
                  

      </div>


        

      ) : (
        <p>Loading...</p>
      )}
    

    </div>


  );
};

export default CardDetail;

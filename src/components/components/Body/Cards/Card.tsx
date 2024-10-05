import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

interface CardProps {
  id?: number;       // Make these optional
  name?: string;     // Optional
  species?: string;  // Optional
  image: string;     // Keep image required since it's used
  gender?: string;   // Optional
}


    
const Card: React.FC<CardProps> = ({ id, name, species, image }) => {
  console.log('Card id:', id); // Verifica el valor del id

  return (
    <div className='cardContainer'>
      <Link to={`/CardDetail/${id}`} >
    
        <div className='cardName'>
          
          <h3>{name}</h3>
        </div>
        <div className='cardImgContainer'>
          <img className='cardImg' src={image} alt={name} />
          <p className='cardInfo'>{species}</p>
        </div>
        <button className='cardBtn'>Ver Mas</button>
      </Link>
    </div>
  );
};

export default Card;

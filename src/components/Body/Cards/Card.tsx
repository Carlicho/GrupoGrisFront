import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  name: string;
  species: string;
  image: string;
  gender: string;
}

const Card: React.FC<CardProps> = ({ id, name, species, image, gender }) => {
  return (
    <div className='cardContainer'>
      <Link to={`/card-detail/${id}`} style={{ textDecoration: 'none' }}>
        <div className='cardName'>
          <p>{id}</p>
          <h3>{name}</h3>
        </div>
        <div className='cardImgContainer'>
          <img className='cardImg' src={image} alt={name} />
          <p className='cardInfo'>{species}</p>
        </div>
        <button className='cardBtn'>Comprar</button>
      </Link>
    </div>
  );
};

export default Card;

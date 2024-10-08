import '../../styles/Card.css'
import React from 'react';

interface CardProps {
  image: { src: string; alt?: string }; // Define the structure of the image object
  title: string; 
  buttonText:string;
  onButtonClick:()=>void;

}

const Card: React.FC<CardProps> = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <div className="Card-Container">
      <div className='cardimgContainer'>
      <img className="cardImg" src={image.src} alt={image.alt || "remera"} />
      </div>
      <h2>{title}</h2>
      <button className='Card-btn' onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

export default Card
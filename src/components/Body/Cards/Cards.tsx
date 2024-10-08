import React from 'react';
import Card from "./Card";
import './Cards.css';

interface Product {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
}

interface CardsProps {
  productos: Product[];
}

const Cards: React.FC<CardsProps> = ({ productos }) => {
  return (
    <div className="cardsContainer">
      {productos.map((prod) => (
        <Card
          key={prod.id}
          id={prod.id}
          name={prod.name}
          image={prod.image}
          species={prod.species}
          gender={prod.gender}
        />
      ))}
    </div>
  );
}

export default Cards;

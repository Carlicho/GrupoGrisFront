import React from "react";
import Banner from "./Banner/Banner";
import "./Body.css";
import MenWomen from "../../assets/forMen&Women.png";
import video from "../../assets/videos/cortocorriendo.mp4";
import Card from "./Cards/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import adidas from '../../assets/adidascarousel.png';
import puma from '../../assets/Pumacarousel.png';
import nike from '../../assets/nikecarousel.png';
import { ImageSlider } from "./ImageSlider/ImageSlider";
import tshirt from '../../assets/carousel card 3.png'
import shoes from '../../assets/carousel card 2.png'
import pants from '../../assets/carousel card 1.png'


const Body: React.FC = () => {
  const [Productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        setProductos(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const IMAGES = [adidas, puma, nike];

  return (
    <section className="body-container">
      <div className="BodyImageSlider">
        <ImageSlider imageUrls={IMAGES} />
      </div>

      <div className="brandsCards">
        <Card image={shoes} />
        <Card image={tshirt} />
        <Card image={pants} />
      </div>

      <div className="videoContainer">
        <video className="video" autoPlay loop muted={true}>
          <source src={video} type="video/mp4" />
        </video>

        <div className="textvideocontainer">
          <h1 className="bodyh1">Explora Nuestros Articulos</h1>
          <button className="videobtn">Ver Mas</button>
        </div>
      </div>

      <div className="cardsBody">
        {Productos.slice(0, 5).map((producto) => (
          <Card
            key={producto.id}
            id={producto.id}
            name={producto.name}
            species={producto.species}
            image={producto.image}
            gender={producto.gender}
          />
        ))}
      </div>

      <Banner />

      <img src={MenWomen} className="MenWomen" alt="Men and Women" />
      <h2>Ropa Hombres</h2>
      <div className="cardsBody">
        {Productos.slice(0, 5).map((producto) => (
          <Card
            key={producto.id}
            name={producto.name}
            species={producto.species}
            image={producto.image}
            gender={producto.gender}
          />
        ))}
      </div>

      <h2>Ropa Mujer</h2>
      <div className="cardsBody">
        {Productos.slice(0, 5).map((producto) => (
          <Card
            key={producto.id}
            name={producto.name}
            species={producto.species}
            image={producto.image}
            gender={producto.gender}
          />
        ))}
      </div>

      <h2>Camisetas de selecciones y clubes</h2>
      <div className="cardsBody">
        {Productos.slice(0, 5).map((producto) => (
          <Card
            key={producto.id}
            name={producto.name}
            species={producto.species}
            image={producto.image}
            gender={producto.gender}
          />
        ))}
      </div>
    </section>
  );
};

export default Body;
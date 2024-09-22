import React from 'react'
import Banner from './Banner/Banner'
import './Body.css'
import MyCarousel from './CarouselShoesHome'
import MenWomen from '../../assets/forMen&Women.png'
import video from '../../assets/videos/cortocorriendo.mp4'
import Card from './Cards/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'




const Body: React.FC = () => {

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
      
      
<div className='videoContainer'>

      <video className='video'  autoPlay loop  muted={true}>
      <source src={video} type="video/mp4" />
      </video>  
        <div className='textvideocontainer'>
            <h1 className='bodyh1'> Explora Nuestros Articulos</h1>
            <button className='videobtn'>Ver Mas</button>
        </div>
</div>
      

      
      <div className='cardsBody'>
        <button className='BodyCardsBtn'>Ver Mas</button>
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


    <Banner/>
    <MyCarousel/>

    <img src={MenWomen} className='MenWomen' />

    <div className='HomeHombres'>
      <h2>Ropa Hombres</h2>

      <div className='cardsContainer'>
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

    <div className='HomeMujeres'>

      <h2>Ropa Mujer</h2>

      <div className='cardsContainer'>
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

    <h2>Camisetas de selecciones y clubes</h2>

    <div className='cardsContainer'>
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
  )
}

export default Body
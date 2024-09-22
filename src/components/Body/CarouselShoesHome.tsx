import React from 'react';
import '../../styles/Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import shoes1 from '../../assets/zapatillas/botines blancos1.png';
import shoes2 from '../../assets/zapatillas/botines rojos2.png';
import shoes3 from '../../assets/zapatillas/running amarillas y negro.png';
import shoes4 from '../../assets/zapatillas/running negras 2.png';

const MyCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000} // Duración entre cada slide (en ms)
        
      >
        <div>
          <img src={shoes1} alt="Slide 1"
            style={{ 
            maxWidth: '130px', 
            maxHeight: '300px', 
            width: '15.625rem', 
            height: 'auto', 
            margin: '20px 0',
          }} />
        </div>
        <div>
          <img src={shoes2} alt="Slide 2"
            style={{ 
            maxWidth: '130px', 
            maxHeight: '300px', 
            width: '130px', 
            height: 'auto', 
            margin: '0' 
          }} />
        </div>
        <div>
          <img src={shoes3} alt="Slide 3" 
            style={{ 
            maxWidth: '130px', 
            maxHeight: '300px', 
            width: '130px', 
            height: 'auto', 
            margin: '0' 
          }}/>
        </div>
        <div>
          <img src={shoes4} alt="Slide 4" 
            style={{ 
            maxWidth: '130px', 
            maxHeight: '300px', 
            width: '130px', 
            height: 'auto', 
            margin: '0' 
          }}/>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
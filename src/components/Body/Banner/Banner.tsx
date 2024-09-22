import React from 'react'
import ImgBanner from '../../../assets/LogoImg.png'
import './Banner.css'

const Banner: React.FC = () => {
  return (
    <div className='banner-container'>
       
             
      <img className='ImgBanner' src={ImgBanner}/>
      
      <div className='newProductsBannerContainer'> 

        <div  className='newproductsTextContainer'>
        <h2>Descubre Nuestros Nuevos Productos</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>


        <button className='banner-btn'>Ver mas</button>
        </div>

      </div>
      
    </div>
  )
}

export default Banner
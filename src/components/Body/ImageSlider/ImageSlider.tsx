// https://www.youtube.com/watch?v=Kx8XlKRBZx8


import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react"
import { useState ,useEffect} from "react"
import './ImageSlider.css'


type ImageSliderProps = {
    imageUrls: string[]
}



export function ImageSlider({imageUrls}: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index =>{
            if (index === imageUrls.length -1) return 0
            return index + 1
        })

    }

    function showPrevImage() {
        setImageIndex(index =>{
            if(index === 0) return imageUrls.length - 1
            return index - 1
        })
        
    }

    //autoplay function

    useEffect(()=>{
        const interval = setInterval(()=>{
            showNextImage();
        },3000);
        return () => clearInterval(interval);
    },[])

    return (
        <div className="imageSliderContainer"> 
            <div className="ImageSlider">
                {imageUrls.map(url => (

            <img className="ImageSliderimg" key={url } src={url}
            style={{translate: `${-100 *imageIndex}%`} }/>
                ))}
            <button onClick={showNextImage} className="img-slider-btn-r" > <ArrowBigRight /></button>
            <button onClick={showPrevImage} className="img-slider-btn-l" > <ArrowBigLeft /></button>
            </div>

            <div className="sliderImgIndex">
                {imageUrls.map((_, index) => (
                    <button key={index} className="img-slider-dot-btn" onClick={()=> setImageIndex(index)}>
                        {index ===imageIndex ? <CircleDot/> : <Circle/>}
                    </button>
                ))}
            </div>
        </div>
    )
}
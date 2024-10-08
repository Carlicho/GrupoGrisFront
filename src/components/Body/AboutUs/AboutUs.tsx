import React from "react"
import './AboutUs.css'
const AboutUs: React.FC = ()=> {
    return(
    <div className="AboutUsContainer">
        
        <div className="AboutLeft">
            <ul>
                <li>inicio</li>
                <li>Proyectos en desarrollo</li>
                <li>Ver todos nuestros proyectos</li>
                <li>Mas sobre nosotros</li>
            </ul>
        </div>
        <div className="AboutRightTop">
            Sobre nosotros:
            Somos developers tanto front como backend buscando mejorar nuestras habilidades y ganar experiencia
        </div>
        <div className="AboutRightBottom">
                Integrantes:
                <ul>
                    <li>integrante nombre</li>
                    <li>integrante nombre</li>
                    <li>integrante nombre</li>
                    <li>integrante nombre</li>
                    <li>integrante nombre</li>
                </ul>
        </div>

        

    </div>)
}

export default AboutUs
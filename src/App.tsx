import React from 'react';
import Header from './components/Header/Header';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'; // Solo necesitas importar Routes y Route
import Body from './components/Body/Body';
import ForMen from './components/Body/ForMen/ForMen';
import ForWomen from './components/Body/ForWomen/ForWomen';
import Ofertas from './components/Ofertas/Ofertas';
import CardDetail from './components/Body/DetailCard/CardDetail';
import AboutUs from './components/Body/AboutUs/AboutUs';
import LogIn from './components/Header/Login/Login';


function App() {
  return (
    <>
      
      <Header />





      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/hombres" element={<ForMen />} />
        <Route path="/mujeres" element={<ForWomen />} />
        <Route path="/sobrenosotros" element={<AboutUs/>} />
        <Route path="/ofertas" element={<Ofertas/>} />
        <Route path="/card-detail/:id" element={<CardDetail />} />
        <Route path="/LogIn" element={<LogIn/>} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  // State to handle burger menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar'>
      {/* Links for desktop */}
      <ul className='links'>
        <li className='link'><Link to="/hombres">Hombres</Link></li>
        <li className='link'><Link to="/mujeres">Mujeres</Link></li>
        <li className='link'><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
        <li className='link'><Link to="/ofertas">Marcas</Link></li>
      </ul>

      {/* Burger icon for mobile */}
      <div className="burger-icon" onClick={toggleMenu}>
        &#9776; {/* This represents the burger icon (three lines) */}
      </div>

      {/* Burger menu (visible only if menuOpen is true) */}
      <ul className={`burger ${menuOpen ? 'open' : ''}`}>
        <li className='burgerLink'><Link to="/hombres">Hombres</Link></li>
        <li className='burgerLink'><Link to="/mujeres">Mujeres</Link></li>
        <li className='burgerLink'><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
        <li className='burgerLink'><Link to="/ofertas">Marcas</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

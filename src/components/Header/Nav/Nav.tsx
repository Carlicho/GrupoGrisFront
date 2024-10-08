import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  // State to handle burger menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Functions to handle dropdown visibility
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className='navbar'>
      <ul className='links'>
        <li 
        className='link'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
          <Link to="/hombres">Hombres</Link>
          {dropdownOpen && ( // Show dropdown menu if dropdownOpen is true
            <ul className="dropdown">
              <li className='dropdownItem'><Link to="/remerashombre">remeras hombre</Link></li>
              <li className='dropdownItem'><Link to="/pantaloneshombre">pantalones hombre</Link></li>
              <li className='dropdownItem'><Link to="/zapatillashombre">zapatillas hombre</Link></li>
            </ul>
          )}
        </li>
        <li
        className='link'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
          <Link to="/mujeres">Mujeres</Link>
          {dropdownOpen && ( // Show dropdown menu if dropdownOpen is true
            <ul className="dropdown">
              <li className='dropdownItem'><Link to="/remerashombre">remeras Mujer</Link></li>
              <li className='dropdownItem'><Link to="/pantaloneshombre">pantalones Mujer</Link></li>
              <li className='dropdownItem'><Link to="/zapatillashombre">zapatillas Mujer</Link></li>
            </ul>
          )}
        </li>

        <li
          className='link'
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
        >
          <Link to="/marcas">Marcas</Link>
          {dropdownOpen && ( // Show dropdown menu if dropdownOpen is true
            <ul className="dropdown">
              <li className='dropdownItem'><Link to="/adidas">Adidas</Link></li>
              <li className='dropdownItem'><Link to="/nike">Nike</Link></li>
              <li className='dropdownItem'><Link to="/puma">Puma</Link></li>
            </ul>
          )}
        </li>
        <li className='link'><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
      </ul>

      
      <div className="burger-icon" onClick={toggleMenu}>
        &#9776; {/* This represents the burger icon (three lines) */}
      </div>

      {/* Burger menu (visible only if menuOpen is true) */}
      <ul className={`burger ${menuOpen ? 'open' : ''}`}>
        <li className='burgerLink'><Link to="/hombres">Hombres</Link></li>
        <li className='burgerLink'><Link to="/mujeres">Mujeres</Link></li>
        <li className='burgerLink'><Link to="/ofertas">Marcas</Link></li>
        <li className='burgerLink'><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

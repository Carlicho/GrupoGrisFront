 import React from 'react'; //desplegar para ver imports 
import './Header.css';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
const Header: React.FC = () => {
  return (
    <header className='HeaderContainer' > 
        <Link className='HeaderOfertas' to="/ofertas">Accede a ofertas y descuentos especiales</Link>
       <SearchBar/>
        <Nav/>

    </header>
  );
};

export default Header;
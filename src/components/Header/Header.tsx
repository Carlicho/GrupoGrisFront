import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='HeaderContainer' > 
      <Link className='HeaderOfertas' to="/ofertas">Accede a ofertas y descuentos especiales</Link>
      <div className='HeaderNav'>
        
      <h1 className='nav-logo'><Link  to="/">SportFlex</Link></h1>
      <nav className='navbar'>
        <ul className='links'>
          <li className='link'> <Link  to="/hombres">Hombres</Link></li>
          <li className='link'> <Link  to="/mujeres">Mujeres</Link></li>
          <li className='link'> <Link  to="/sobrenosotros">Sobre Nosotros</Link></li>
          <li className='link'> <Link  to="/ofertas">Ofertas</Link></li>
        </ul>
      </nav>
      <div className="login">
        <ShoppingCartIcon fontSize="medium" color="inherit" className='nav-icon'/>
        <SearchIcon fontSize="medium" color="inherit" className='nav-icon'/>
        <Link to="/login">
        <LoginIcon fontSize="medium" color="inherit" className='nav-icon'/>
        </Link>
      </div>
      </div>
    </header>
  );
};

export default Header;

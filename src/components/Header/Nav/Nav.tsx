import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';



const Header: React.FC = () => {
  return (

        

      <nav className='navbar'>
        <ul className='links'>

          <li className='link '> <Link  to="/hombres">Hombres</Link></li>
          <li className='link '> <Link  to="/mujeres">Mujeres</Link></li>
          <li className='link '> <Link  to="/sobrenosotros">Sobre Nosotros</Link></li>
          <li className='link '> <Link  to="/ofertas">Marcas</Link></li>
        </ul>

        <ul className='burguer'>

<li className='link '> <Link  to="/hombres">Hombres</Link></li>
<li className='link '> <Link  to="/mujeres">Mujeres</Link></li>
<li className='link '> <Link  to="/sobrenosotros">Sobre Nosotros</Link></li>
<li className='link '> <Link  to="/ofertas">Marcas</Link></li>
</ul>
      </nav>


  );
};

export default Header;
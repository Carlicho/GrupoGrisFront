import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import './SearchBar.css';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

const SearchBar: React.FC= () => {
    return(

        <div className='SearchBarContainer' > 
         
 z     <div className='burguerbtn'>
      <div className='HeaderNav'>
 z         </div>

          <MenuIcon />
        
      <h1 className='nav-logo'><Link  to="/">SportFlex</Link></h1>
        <div className='searchcontainer'>
        <input type='search' className='Searchinput'></input>
        <SearchIcon fontSize="medium" color="inherit" className='nav-icon'/>
    
    </div>


      <div className="login">
        <ShoppingCartIcon fontSize="medium" color="inherit" className='nav-icon'/>
        <Link to="/login">
        <LoginIcon fontSize="medium" color="inherit" className='nav-icon'/>
        </Link>
        
      </div>
      </div>
    </div>
)
}

export default SearchBar
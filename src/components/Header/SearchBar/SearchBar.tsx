import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const SearchBar: React.FC= () => {

  const {loginWithRedirect} = useAuth0()


    return(

        <div className='SearchBarContainer' > 
         

      <div className='HeaderNav'>

          
        
      <h1 className='nav-logo'><Link  to="/">SportFlex</Link></h1>
        <div className='searchcontainer'>
        <input type='search' className='Searchinput'></input>
        <SearchIcon fontSize="medium" color="inherit" className='nav-icon'/>
    
    </div>


      <div className="login">
        <ShoppingCartIcon fontSize="medium" color="inherit" className='nav-icon'/>
        <button onClick={() => loginWithRedirect()}>
        <LoginIcon fontSize="medium" color="inherit" className='nav-icon'/>
        </button>
        
      </div>
      </div>
    </div>
)
}

export default SearchBar
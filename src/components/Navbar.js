import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <div>
        <nav>
          <input type='checkbox' id='check'></input>  
          <label for='check' className='checkbtn'>
            <MenuIcon style={{fontSize:'30px'}} />
          </label>
          <img className='nav-img' src= {logo} width='70' height = '45'></img>
          <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/experience'>About</Link></li>
           <li><Link to='/projects'>Projects</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
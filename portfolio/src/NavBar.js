import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from 'bootstrap';
import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg" id="nav-bar">
    <div class="container">
        <Link class="navbar-brand" to='/home' style={{ color: 'white' }}>
            <img src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1708935384/agp42z38dlmnhrjlbeeo.png" alt="logo" id='logo'></img>Manohar
        </Link>
       
        <div class="collapse navbar-collapse" id='flexing'>
           <ul class="navbar-nav" id="nav-links">
                  <li class="nav-item" id="link1">
                    <Link class="nav-link active"to='/home' style={{ color: 'gold' }}>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" style={{ color: 'gold' }} to='/about'>About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active"to='/services' style={{ color: 'gold' }}>Services</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" to='/career' style={{ color: 'gold' }}>Career</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" to='/contact' style={{ color: 'gold' }}>Contact</Link>
                  </li>
                  </ul>
                  <Button ><HiMenuAlt2 /></Button>
            </div>
        </div>
    
</nav>
  );
}

export default NavBar;

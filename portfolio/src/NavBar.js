import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  
  
  return (
       <nav className='container-fluid'>
        <li>
          <Link to='/home' id='name'><img src='https://res.cloudinary.com/dpfnyv0ut/image/upload/v1708935384/agp42z38dlmnhrjlbeeo.png' id='logo' alt='logo'>
            </img>Portfolio!!</Link>
        </li>
        <div className="nav-icon" onClick={handleClick}>
           {click ? (
              <span className="icon">
              <IoMdClose size={20} />
              </span>
            ) : (
              <span className="icon">
               
                <HiMenuAlt2 size={20} />
              </span>
            )}
          </div>
        <ul className={click?"nav-menu":""}>
          <li><NavLink onClick={closeMenu} to='/home'>Home</NavLink></li>
          <li><NavLink onClick={closeMenu} to='/about'>About</NavLink></li>
          <li><NavLink onClick={closeMenu} to='/Services'>Services</NavLink></li>
          <li><NavLink onClick={closeMenu} to='/Career'>Career</NavLink></li>
          <li><NavLink onClick={closeMenu} to='/Contact'>Contact</NavLink></li>
        </ul>
      
       </nav>
  )
}

export default NavBar


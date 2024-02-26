import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
       <nav className='container-fluid'>
        <li>
          <Link to='/home' id='name'><img src='https://res.cloudinary.com/dpfnyv0ut/image/upload/v1708935384/agp42z38dlmnhrjlbeeo.png' id='logo' alt='logo'>
            </img>manohar!!</Link>
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
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/Services'>Services</NavLink></li>
          <li><NavLink to='/Career'>Career</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
      
       </nav>
  )
}

export default NavBar





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HiMenuAlt2 } from "react-icons/hi";
//  import { IoMdClose } from "react-icons/io";
// import "./NavBar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//           <img src='https://res.cloudinary.com/dpfnyv0ut/image/upload/v1708935384/agp42z38dlmnhrjlbeeo.png' id='logo' alt='logo'>
//             </img>Manohar

//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//            {click ? (
//                <span className="icon">
//               <IoMdClose />
//               </span>
//             ) : (
//               <span className="icon">
               
//                 <HiMenuAlt2 />
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import Career from './Career';
import Contact from './Contact';
import NavBar from './NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/home' element ={<Home/>}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/services' element ={<Services/>}/>
            <Route path='/career' element ={<Career/>}/>
            <Route path='/contact' element ={<Contact/>}/>
            </Routes>
          </BrowserRouter>
      );
//dmcld



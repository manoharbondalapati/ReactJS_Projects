import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import APP from './APP';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
                <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/app' element={<APP/>}/>
               <Route path='/' element={<HomePage/>}/>
               </Routes>
           </BrowserRouter>
          
   
  
);


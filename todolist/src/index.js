import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Todo from './Todo';
import Edit from './Edit';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
           <BrowserRouter>
           
               <Routes>
                <Route path='/' element={<Todo/>}/>
                <Route path='/list/:id' element={<Edit/>}/>
               
               </Routes>
           </BrowserRouter>
                
        
            );





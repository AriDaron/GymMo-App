import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GymMo } from './components/GymMo';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='background' style={{ 
      backgroundImage: `url("https://www.freepik.com/photos/barbell")` 
    }}>
    <GymMo />
   </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


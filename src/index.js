import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GymMo } from './components/GymMo';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GymMo />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


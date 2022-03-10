import React from 'react';
import ReactDOM from 'react-dom';
import { GymMo } from './components/GymMo';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GymMo />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


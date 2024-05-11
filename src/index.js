import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import Login from './login/login.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
 

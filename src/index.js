import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homefinal from './component/Homefinal';
import Contact from './component/contact';
import Service from './component/services';
import About from './component/aboutus';

import ProductFinal from './component/ProductFinal';
import Castleclass from './component/Castleclass';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

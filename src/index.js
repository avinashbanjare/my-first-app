import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import testingjs from './App1';
import Calculator from './calculator/Calculator';
 import Signin from './Auth/SignIn/signin';
import App1 from './App1';
import ApiDemo from './ApiDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/* <App1 /> /*
    {/* <Test /> */}
   {/* <Calculator /> */}

   <ApiDemo />
   {/* <Signin /> */}
   
  </React.StrictMode>
  
);
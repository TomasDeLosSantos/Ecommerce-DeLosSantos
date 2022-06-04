import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBfugjgyUT5my10-344aC8Xt5s9rISb6Fk",
  authDomain: "ecommerce-react-a8545.firebaseapp.com",
  projectId: "ecommerce-react-a8545",
  storageBucket: "ecommerce-react-a8545.appspot.com",
  messagingSenderId: "1040093468123",
  appId: "1:1040093468123:web:68e1259b1125cd3ab1c3fe"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

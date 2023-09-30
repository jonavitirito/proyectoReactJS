import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.scss";
import "./index.css";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEw5uHOmwOhQ_unbRaviL3wvL7GqmhkmI",
  authDomain: "j-happliances.firebaseapp.com",
  projectId: "j-happliances",
  storageBucket: "j-happliances.appspot.com",
  messagingSenderId: "418744752434",
  appId: "1:418744752434:web:8be80245b2a7d8c4dcdf2b"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

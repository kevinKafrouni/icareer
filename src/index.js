import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
/*import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"kevin",
    password:"k1772002k",
    database:"icareer"
})
app.use(express.json());
app.use(cors())

app.listen(3000,()=>{
    console.log("connected to backend");
})*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state'
import { addPost } from './redux/state';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter> 
 <App state={state} addPost={addPost} />
 </BrowserRouter>
   
 
);


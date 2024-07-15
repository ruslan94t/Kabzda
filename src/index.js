


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


import store from './redux/state';

export  const rendereEntree = (state)=>{
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
        <App state={store._state} 
        dispatch={store.dispatch.bind(store)}
        
        />
    </BrowserRouter>
   
 
);

}


rendereEntree(store.getState())

store.subscribe(rendereEntree)
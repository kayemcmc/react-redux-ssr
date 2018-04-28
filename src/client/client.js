// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Routes from './Routes';

ReactDOM.hydrate(
    <BrowserRouter>
    <Home />
    </BrowserRouter>, document.querySelector('#root'));
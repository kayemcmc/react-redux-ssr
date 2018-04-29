// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
         <Home />
        </BrowserRouter>
    </Provider>, document.querySelector('#root'));
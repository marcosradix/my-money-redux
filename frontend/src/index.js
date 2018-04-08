import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware ,createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './main/reducers';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('app'));
registerServiceWorker();

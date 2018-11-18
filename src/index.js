import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import { Provider } from 'react-redux'
import configureStore from './store';
import registerServiceWorker from './serviceWorker.js';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
            <Provider store={configureStore()}>
                <App />
            </Provider>
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
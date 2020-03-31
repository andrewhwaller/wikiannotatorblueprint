// React components/global components
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";

// Blueprint.js components

// custom components

// actions

// CSS
import "./index.scss";

ReactDOM.render(
    <Provider store={ configureStore() }>
        <Router>
            <App />
        </Router>
    </Provider>,
        document.getElementById("root")
    );
    
    serviceWorker.unregister();

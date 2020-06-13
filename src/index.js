// React components/global components
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import article from "./reducers/article";
import articleDirty from "./reducers/articleDirty";
import darkMode from "./reducers/darkMode";
// Blueprint.js components

// custom components

// actions

// CSS
import "./index.scss";
// 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers(
    {
        article,
        articleDirty,
        darkMode
    }
)

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
    
serviceWorker.unregister();

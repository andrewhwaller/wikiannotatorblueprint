// React components/global components
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/rootReducer.js";
// Blueprint.js components

// custom components

// actions

// CSS
import "./index.scss";
// 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    composeEnhancer(
        applyMiddleware(
            thunk
        )
    )
)

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter history={ history }>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
    
serviceWorker.unregister();

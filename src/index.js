// React components/global components
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
// import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect"
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/rootReducer.js";
// Blueprint.js components

// custom components
// import Login from "./Login";
// actions

// CSS
import "./index.scss";
// 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducers = combineReducers(
//     {
//         article,
//         articleDirty,
//         articleLoading,
//         darkMode
//     }
// )

const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    composeEnhancer(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    )
)

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App />
            {/* <Route path="/login" component={ Login } />
            <Route path="/app" component={ App } /> */}
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
    
serviceWorker.unregister();

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import article from "./article";
import articleDirty from "./articleDirty";
import articleLoading from "./articleLoading";
import auth from "./auth";
import authInput from "./authInput";
import darkMode from "./darkMode";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    article,
    articleDirty,
    articleLoading,
    auth,
    authInput,
    darkMode
})

export default createRootReducer;
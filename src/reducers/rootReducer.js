import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import article from "./article";
import articleDirty from "./articleDirty";
import articleLoading from "./articleLoading";
import darkMode from "./darkMode";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    article,
    articleDirty,
    articleLoading,
    darkMode
})

export default createRootReducer;
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import article from "./article";
import articleDirty from "./articleDirty";
import articleLoading from "./articleLoading";
import articleSaving from "./articleSaving";
import auth from "./auth";
import authInput from "./authInput";
import darkMode from "./darkMode";
import unsavedDelta from "./unsavedDelta";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    article,
    articleDirty,
    articleLoading,
    articleSaving,
    auth,
    authInput,
    darkMode,
    unsavedDelta
})

export default createRootReducer;
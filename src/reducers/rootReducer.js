import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import alert from "./alert";
import article from "./article";
import articleDirty from "./articleDirty";
import articleLoading from "./articleLoading";
import articleSaving from "./articleSaving";
import authenticated from "./authenticated";
import authInput from "./authInput";
import darkMode from "./darkMode";
import token from "./token";
import unsavedDelta from "./unsavedDelta";
import user from "./user";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    alert,
    article,
    articleDirty,
    articleLoading,
    articleSaving,
    authenticated,
    authInput,
    darkMode,
    token,
    unsavedDelta,
    user
})

export default createRootReducer;
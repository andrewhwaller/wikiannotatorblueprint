import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import alert from "./alert";
import article from "./article";
import articles from "./articles";
import articleDirty from "./articleDirty";
import articleLoading from "./articleLoading";
import articleDeleting from "./articleDeleting";
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
    articles,
    articleDirty,
    articleLoading,
    articleSaving,
    articleDeleting,
    authenticated,
    authInput,
    darkMode,
    token,
    unsavedDelta,
    user
})

export default createRootReducer;
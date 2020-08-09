import Cookies from "js-cookie";
import { alertFailure } from "./alert";
import { setArticle } from "./article";
import { getAllArticles, setAllArticles } from "./articles";
import * as Constants from "../constants";

export const submitLoginRequest = credentials => {
    return dispatch => {
        let status;
        let headers = new Headers();
        headers.set("Content-type", "application/json");
        return fetch(Constants.BASE_URL + "/users/login", {
            method: "POST",
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            headers: headers
        })
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then(json => {
                Cookies.set("auth_token", json.auth_token, { expires: 2 });
                if (status === 200 && Cookies.get("auth_token")) {
                    dispatch(setToken(json.auth_token));
                    dispatch(loginSuccess());
                    dispatch(getAllArticles());
                } else {
                    dispatch(loginFailure());
                };
            });
    };
};

export const loginSuccess = () => {
    return {
        type: "LOGIN_SUCCESS",
        authenticated: true
    };
};

export const loginFailure = () => {
    let failure = {
        message: "Log in failed. Please check your credentials and try again."
    };
    return dispatch => {
        dispatch(alertFailure(failure));
        return {
            type: "LOGIN_FAILURE",
            user: {}
        };
    };
};

export const logoutUser = () => {
    Cookies.remove("auth_token");
    return dispatch => {
        dispatch(setArticle({}));
        dispatch(setAllArticles([]));
        dispatch(setToken([]));
        dispatch(revokeAuthentication());
    };
};

export const revokeAuthentication = () => {
    return {
        type: "LOGOUT_USER",
        authenticated: false
    };
};

export const setToken = token => {
    return {
        type: "SET_TOKEN",
        token: token
    }
};
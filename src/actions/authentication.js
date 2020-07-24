import Cookies from "js-cookie";
import { alertFailure } from "./alert";
import * as Constants from "../constants"

export const submitLoginRequest = credentials => {
    console.log(credentials)
    return dispatch => {
        let status;
        let headers = new Headers();
        headers.set("Content-type", "application/json");
        return fetch(Constants.BASE_URL + "/users/login", {
            method: "POST",
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            headers: headers
        })
        .then(handleErrors)
        .then(response => {
            status = response.status;
            return response.json();
        })
        .then(json => {
            Cookies.set("auth_token", json.auth_token, { expires: 2 });
            if (status === 200 && Cookies.get("auth_token")) {
                dispatch(setToken(json.auth_token))
                dispatch(loginSuccess(json))
            } else if (status === 500 && Cookies.get("auth_token")) {
                dispatch(loginFailure())
            }
        })
    }
}

export const loginSuccess = user => {
    return {
        type: "LOGIN_SUCCESS",
        user: user
    }
}

export const loginFailure = () => {
    let failure = {
        message: "Log in failed. Please check your credentials and try again."
    }
    return dispatch => {
        dispatch(alertFailure(failure))
        return {
            type: "LOGIN_FAILURE",
            user: {}
        }
    }
}

export const logoutUser = () => {
    Cookies.remove('auth_token');
    return {
        type: "LOGOUT_USER",
        authenticated: false
    }
}

export const setToken = token => {
    return {
        type: "SET_TOKEN",
        token: token
    }
};

let handleErrors = function (response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
import Cookies from "js-cookie";

export const submitLoginRequest = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/users/login", {
            method: "POST",
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            status = response.status;
            return response.json();
        })
        .then((json) => {
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
    return {
        type: "LOGIN_FAILURE",
        user: {}
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
}
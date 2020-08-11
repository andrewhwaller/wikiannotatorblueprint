import * as Constants from "../constants"
import { setAuthInput } from "./authInput";

export const submitRegistrationRequest = credentials => {
    console.log(credentials)
    return dispatch => {
        let status;
        return fetch(Constants.BASE_URL + "/users", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({user: { email: credentials.email, password: credentials.password, password_confirmation: credentials.password_confirmation }}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            status = response.status;
            return response.json();
        })
        .then(json => {
            if (status === 201) {
                dispatch(registrationSuccess())
            } else {
                dispatch(registrationFailure())
            }
        })
    }
}

export const registrationSuccess = () => {
    return dispatch => {
        dispatch(setAuthInput("login"))
        return {
            type: "ALERT_SUCCESS",
            message: "You are now registered!"
        }
    }
}

export const registrationFailure = () => {
    return {
        type: "ALERT_FAILURE",
        message: "Registration failed! Please check your credentials and try again."
    }
}
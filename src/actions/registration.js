import * as Constants from "../constants"
import { setAuthInput } from "./authInput";
import { alertFailure, alertSuccess } from "./alert";

export const submitRegistrationRequest = credentials => {
    return dispatch => {
        let status;
        return fetch(Constants.BASE_URL + "/users", {
            method: "POST",
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
    let success = {
        message: "You are now registered! Please log in using your new credentials."
    }
    return async dispatch => {
        await dispatch(setAuthInput("login"))
        dispatch(alertSuccess(success));
    }
}

export const registrationFailure = () => {
    let failure = {
        message: "Registration failed. Please check your credentials and try again."
    }
    return dispatch => {
        dispatch(alertFailure(failure));
    }
}
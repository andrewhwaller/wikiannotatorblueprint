export const submitRegistrationRequest = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/users", {
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
            if (status === 201) {
                dispatch(registrationSuccess())
            } else {
                dispatch(registrationFailure())
            }
        })
    }
}

export const registrationSuccess = () => {
    return {
        type: "ALERT_SUCCESS",
        message: "You are now registered!"
    }
}

export const registrationFailure = () => {
    return {
        type: "ALERT_FAILURE",
        message: "Registration failed! Please check your credentials and try again."
    }
}
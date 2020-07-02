export const alertSuccess = action => {
    return {
        type: "ALERT_SUCCESS",
        message: action.message
    }
}

export const alertFailure = action => {
    return {
        type: "ALERT_FAILURE",
        message: action.message
    }
}

export const clearAlert = () => {
    return {
        type: "CLEAR_ALERT",
        alert: ""
    }
}
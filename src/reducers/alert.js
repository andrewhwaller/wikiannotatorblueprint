export default function alert(state = false, action) {
    switch (action.type) {
        case "ALERT_SUCCESS":
            return {
                type: "alert-success",
                message: action.message,
            };
        case "ALERT_ERROR":
            return {
                type: "alert-danger",
                message: action.message,
            };
        case "ALERT_CLEAR":
            return false;
        default:
            return state;
    }
}

export default function alert(state = "", action) {
    switch (action.type) {
        case "ALERT_SUCCESS":
            return {
                type: "alert-success",
                message: action.message,
            };
        case "ALERT_FAILURE":
            return {
                type: "alert-danger",
                message: action.message,
            };
        case "CLEAR_ALERT":
            return "";
        default:
            return state;
    }
}

export default (state = false, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return action.authenticated;
        case "LOGIN_FAILURE":
            return action.authenticated;
        case "LOGOUT_USER":
            return action.authenticated;
        default:
            return state;
    }
}
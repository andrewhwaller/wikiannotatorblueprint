export default (state = false, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                authenticated: true,
            };
        case "LOGIN_FAILURE":
            return {
                authenticated: false,
            };
        case "LOGOUT_USER":
            return {
                authenticated: false
            }
        default:
            return state;
    }
}
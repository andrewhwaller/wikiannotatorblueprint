export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                user: action.user
            };
        case "LOGIN_FAILURE":
            return {
                user: action.user
            };
        case "LOGOUT_USER":
            return {
                user: {}
            }
        default:
            return state;
    }
}
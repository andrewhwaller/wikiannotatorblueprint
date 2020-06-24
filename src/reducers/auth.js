// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

export default (state = [], action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                authenticating: true,
                user: action.user
            };
        case "LOGIN_SUCCESS":
            return {
                authenticated: true,
                user: action.user
            };
        case "LOGIN_FAILURE":
            return {};
        case "LOGOUT":
            return {};
        default:
            return state;
    }
}
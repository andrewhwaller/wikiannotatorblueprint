export default (state = "login", action) => {
    switch (action.type) {
        case "SET_AUTH_INPUT":
            return action.input;
        default:
            return state;
    }
};
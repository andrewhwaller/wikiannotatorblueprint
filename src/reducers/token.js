export default (state = [], action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return action.token;
        case "CLEAR_TOKEN":
            return action.token;
        default:
            return state;
    }
};
export default (state = {}, action) => {
    switch (action.type) {
        case "SET_DELTA":
            return action.delta;
        case "CLEAR_DELTA":
            return action.delta;
        default:
            return state;
    }
};
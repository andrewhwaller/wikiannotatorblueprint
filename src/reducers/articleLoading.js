export default (state = false, action) => {
    switch (action.type) {
        case "SET_LOADING_TRUE":
            return action.loading;
        case "SET_LOADING_FALSE":
            return action.loading;
        default:
            return state;
    }
};
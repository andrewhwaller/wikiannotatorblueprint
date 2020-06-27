export default (state = false, action) => {
    switch (action.type) {
        case "SET_LOADING_TRUE":
            return action.loading = true;
        case "SET_LOADING_FALSE":
            return action.loading = false;
        default:
            return state;
    }
};
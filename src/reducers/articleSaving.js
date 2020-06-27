export default (state = false, action) => {
    switch (action.type) {
        case "SET_SAVING_TRUE":
            return action.saving;
        case "SET_SAVING_FALSE":
            return action.saving;
        default:
            return state;
    }
};
export default (state = false, action) => {
    switch (action.type) {
        case "SET_DIRTY_TRUE":
            return action.dirty;
        case "SET_DIRTY_FALSE":
            return action.dirty;
        default:
            return state;
    }
};
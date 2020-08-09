export default (state = false, action) => {
    switch (action.type) {
        case "SET_DELETING_TRUE":
            return action.deleting;
        case "SET_DELETING_FALSE":
            return action.deleting;
        default:
            return state;
    }
};
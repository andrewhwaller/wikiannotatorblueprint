export default (state = false, action) => {
    switch (action.type) {
        case "CHANGE_MODE":
            return action.darkMode;
        default:
            return state;
    }
};
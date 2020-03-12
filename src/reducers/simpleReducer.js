export default (state = {}, action) => {
    switch (action.type) {
        case "DISPLAY_ARTICLE":
            return {
                result: action.payload
            };
        default:
            return state;
    }
};

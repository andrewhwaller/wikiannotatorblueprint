export default (state = {}, action) => {
    switch (action.type) {
        case "SET_ARTICLE":
            return {
                result: action.payload
            };
        default:
            return state;
    }
};

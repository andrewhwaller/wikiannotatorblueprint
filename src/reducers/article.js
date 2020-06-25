export default (state = {}, action) => {
    switch (action.type) {
        case "SET_ARTICLE":
            return action.article;
        case "SAVE_ARTICLE":
            return action.article;
        default:
            return state;
    }
};
export const displayArticle = () => dispatch => {
    dispatch({
        type: "DISPLAY_ARTICLE",
        payload: "result_of_simple_action"
    });
};

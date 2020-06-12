export const setArticle = article => {
    return {
        type: "SET_ARTICLE",
        article: article
    }
}

export const getArticle = article => {
    return dispatch => {
        return fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${article.pageid}&prop=text&formatversion=2`)
            .then(response => response.json())
            .then(() => dispatch(setArticle(article)))
    }
};

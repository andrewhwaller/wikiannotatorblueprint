export const setArticle = article => {
    if (article) {
        return {
            type: "SET_ARTICLE",
            article: article
        }
    } else {
        return
    }
}

export const getArticleFromSearch = article => {
    return dispatch => {
        dispatch({ type: "SET_LOADING_TRUE", loading: true })
        return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=${article.title}`)
            .then(response => response.json())
            .then(data => data.query.pages[article.pageid])
            .then(result => dispatch({ type: "SET_ARTICLE", article: result }))
            .finally(() => dispatch({ type: "SET_LOADING_FALSE", loading: false }))
    }
};

export const setDirtyFalse = value => {
    return {
        type: "SET_DIRTY_FALSE",
        dirty: value
    }
}

export const setDirtyTrue = value => {
    return {
        type: "SET_DIRTY_TRUE",
        dirty: value
    }
}

export const setLoadingFalse = () => {
    return {
        type: "SET_LOADING_FALSE",
        loading: false
    }
}

export const setLoadingTrue = () => {
    return {
        type: "SET_LOADING_TRUE",
        loading: true
    }
};

export const changeArticleText = value => {
    return {
        type: "CHANGE_ARTICLE_TEXT",
        text: value
    };
};
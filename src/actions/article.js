export const setArticle = article => {
    if (article) {
        console.log(article)
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
        return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=${article.title}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.query.pages[article.pageid])
                return data.query.pages[article.pageid];
            })
            // .then(result => dispatch({ type: "SET_ARTICLE", result}))
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
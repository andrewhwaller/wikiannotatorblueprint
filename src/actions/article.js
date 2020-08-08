import Cookies from "js-cookie";
import { alertFailure } from "./alert";
import { getAllArticles } from "./articles"
import * as Constants from "../constants";

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

export const deleteArticle = (article) => {
    return (dispatch) => {
        let route;
        let method;
        let headers = new Headers();

        if (article.id) {
            route = Constants.BASE_URL + "/articles/" + article.id
            method = "DELETE"
        }

        headers.set("Content-type", "application/json");
        headers.set("Authorization", Cookies.get("auth_token"));
        
        return fetch(route, {
            method: method,
            body: JSON.stringify(article),
            headers: headers
        })
            .then(response => {
                if (response.status === 204) {
                    dispatch(getAllArticles());
                } else {
                    dispatch(deleteFailure());
                }
            })
            .catch((error) => {
                console.error(error);
        })
    }
}

export const beginSaveArticle = article => {
    return dispatch => {
        dispatch(setSavingTrue());
        dispatch(saveArticle(article));
    };
};

export const saveArticle = article => {
    return dispatch => {
        let status;
        let route;
        let method;
        let headers = new Headers();

        if (article.id) {
            route = Constants.BASE_URL + "/articles/" + article.id
            method = "PUT"
        } else {
            route = Constants.BASE_URL + "/articles"
            method = "POST" 
        }

        headers.set("Content-type", "application/json");
        headers.set("Authorization", Cookies.get("auth_token"));

        
        return fetch(route, {
            method: method,
            body: JSON.stringify(article),
            headers: headers
        })
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then((json) => {
                if (status === 200 || status === 201) {
                    dispatch(saveArticleComplete(json.data));
                }
            })
            .catch((error) => {
                dispatch(saveFailure());
        })
    }
}

export const saveFailure = () => {
    let failure = {
        message: "Save failed. Please try again."
    };
    return dispatch => {
        dispatch(alertFailure(failure));
        return {
            type: "SAVE_FAILURE",
            payload: ""
        };
    };
};

export const deleteFailure = () => {
    let failure = {
        message: "Delete failed. Please try again."
    };

    return dispatch => {
        dispatch(alertFailure(failure));
        return {
            type: "DELETE_FAILURE",
            payload: ""
        };
    };
};

export const saveArticleComplete = article => {
    return dispatch => {
        dispatch(setSavingFalse());
        dispatch(getArticle(article));
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

export const getArticle = article => {
    return dispatch => {
        let status;
        let route;
        let headers = new Headers();

        route = Constants.BASE_URL + "/articles/" + article.id

        headers.set("Authorization", Cookies.get("auth_token"));
        
        return fetch(route, {
            method: "GET",
            headers: headers
        })
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then((json) => {
                if (status === 200 || status === 201) {
                    json.data.attributes.created_at = json.data.attributes.created_at.split('T')[0]
                    json.data.attributes.updated_at = json.data.attributes.updated_at.split('T')[0]
                    dispatch(setArticle(json.data.attributes))
                }
            })
            .catch((error) => {
                console.error(error)
        })
    }
}

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

export const setSavingFalse = () => {
    return {
        type: "SET_SAVING_FALSE",
        saving: false
    }
}

export const setSavingTrue = () => {
    return {
        type: "SET_SAVING_TRUE",
        saving: true
    }
};
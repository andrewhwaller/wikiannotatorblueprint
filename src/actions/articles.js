import Cookies from "js-cookie";
import { setLoadingTrue, setLoadingFalse } from "./article";
import * as Constants from "../constants";

export const setAllArticles = articles => {
    if (articles) {
        return {
            type: "SET_ALL_ARTICLES",
            articles: articles
        }
    } else {
        return
    }
}

export const getAllArticles = () => {
    return dispatch => {
        dispatch(setLoadingTrue());
        let status;
        let route;
        let headers = new Headers();

        route = Constants.BASE_URL + "/articles"

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
                    let articles = json.data.map(article => {
                        return article.attributes;
                    })
                    dispatch(setAllArticles(articles))
                }
            })
            .finally(() => {
                dispatch(setLoadingFalse());
            })
            .catch((error) => {
                console.error(error)
        })
    }
}
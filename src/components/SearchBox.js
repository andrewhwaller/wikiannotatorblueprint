import React, { Component } from "react";
import Omnibar from "omnibar";
import WikiSearchExtension from "./WikiSearchExtension";
import ResultItem from "./ResultItem";

class SearchBox extends Component {
    render() {
        return (
            <div className="searchContainer">
                <div className="searchInputContainer">
                    <Omnibar
                        className={"bp3-input"}
                        id="omnibarInput"
                        placeholder="Start typing to search Wikipedia..."
                        maxResults={10}
                        childclass={"input"}
                        maxViewableResults={5}
                        render={ResultItem}
                        extensions={[WikiSearchExtension]}
                    ></Omnibar>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const searchbox = document.getElementById("omnibarInput");
        searchbox.style.removeProperty("border-color");
        searchbox.style.removeProperty("border-style");
        document
            .getElementById("omnibarInput")
            .addEventListener("focus", () => {
                const ul = document.querySelector(
                    ".searchInputContainer > div > ul"
                );
                ul.classList.add("bp3-menu", "bp3-elevation-1");
                ul.style.removeProperty("background-color");
                ul.style.removeProperty("border-bottom");
            });
    }
}

export default SearchBox;

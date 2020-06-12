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
}

export default SearchBox;

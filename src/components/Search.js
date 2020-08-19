import React, { Component } from "react";
import DownshiftSearch from "./DownshiftSearch"

class Search extends Component {
    render() {
        return (
            <div id="content" className="d-flex-column h-100">
                <div className="d-flex-row mt-5">
                    <div className="d-flex-column w-100">
                        <h1 className="mx-auto">Let's get an article!</h1>
                        <DownshiftSearch />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

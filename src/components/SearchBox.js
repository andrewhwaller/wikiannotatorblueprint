import React, { Component } from "react";
import Omnibar from 'omnibar';
import WikiSearchExtension from './WikiSearchExtension';
import ResultItem from './ResultItem';

class SearchBox extends Component {

    render() {
        return (
            <div className="searchContainer">
                <div className="bp3-input-group bp3-large searchInputContainer">
                    <Omnibar
                        placeholder="Start typing to search Wikipedia..."
                        maxResults={10}
                        maxViewableResults={5}
                        extensions={[
                            WikiSearchExtension,
                        ]}>
                        {ResultItem}
                    </Omnibar>
                </div>
            </div>
        )
    }
}

export default SearchBox;
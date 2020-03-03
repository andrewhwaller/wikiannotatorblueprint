import React, { Component } from "react";
import Omnibar from 'omnibar';
import WikiSearchExtension from './WikiSearchExtension';
import ResultItem from './ResultItem';

class SearchBox extends Component {
    // const divStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    //   };
    
    render() {
        return (
            <div className="searchContainer">
                <div className="searchInputContainer">
                    <Omnibar
                        className={"bp3-input"}
                        placeholder="Start typing to search Wikipedia..."
                        maxResults={10}
                        maxViewableResults={5}
                        render={ResultItem}
                        extensions={[
                            WikiSearchExtension
                        ]}>
                        {/* {ResultItem} */}
                    </Omnibar>
                </div>
            </div>
        )
    }
}

export default SearchBox;
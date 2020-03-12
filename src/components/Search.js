import React, { Component } from 'react';
import Downshift from './DownshiftSearch'

class Search extends Component {
    render() {
        return (
            <div id="content" className="searchContainer">
                <Downshift />
            </div>
        );
    }
}

export default Search;

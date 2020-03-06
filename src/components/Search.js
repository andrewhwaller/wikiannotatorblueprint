import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Downshift from './DownshiftSearch'

class Search extends Component {

    render() {

        return (
            <div id="content" className="searchContainer">
                {/* <SearchBox /> */}
                <Downshift />
            </div>
        );
    }
}

export default Search;
<<<<<<< HEAD
import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Downshift from './DownshiftSearch'
=======
import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
>>>>>>> ab4c465987bde0293deb8edc62c4152b514b4c6e

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

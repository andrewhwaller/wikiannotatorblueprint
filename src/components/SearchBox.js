import React, { Component } from "react";
import axios from 'axios';

class SearchBox extends Component {

    constructor (props) {
        super(props);

        this.state = {
            query: "",
            results: {},
            loading: false,
            message: ""
        };
        this.cancel = "";
    }

    handleInputChange = event => {
        const query = event.target.value;

        if (!query) {
            this.setState({ query, results: {}, message: '' } );
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };

    fetchSearchResults = query => {
        const endpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&exintro&explaintext&redirects=1&srsearch=${query}`
        
        if (this.cancel) {
            this.cancel.cancel()
        }
        
        this.cancel = axios.CancelToken.source();

        axios.get(endpoint, {
            cancelToken: this.cancel.token,
        })
            .then((res) => {
            const resultNotFoundMessage = !res.data.query.searchinfo.totalhits ? "No results found." : "";
            this.setState({
                results: res.data.query.search,
                message: resultNotFoundMessage,
                loading: false,
            });
        })
        // .catch((error) => {
        //     if (axios.isCancel(error) || error) {
        //         console.log("got cancelled; error")
        //         this.setState({
        //             loading: false,
        //             message: "Fetch failed."
        //         });
        //     }
        // });
    };

    renderSearchResults = () => {
        if (this.state.query) {
            const { results } = this.state;

            if (Object.keys(results).length && results.length) {
                console.log(results.length)
                return (
                    <div className="results-container fade">
                        <ul className="bp3-menu results-list">
                            { results.map((result) => {
                                return (
                                    <li key={ result.pageid } className="results-list-item">
                                        <a className="bp3-menu-item bp3-popover-dismiss result-link" href={ "http://en.wikipedia.org/?curid=" + result.pageid }>
                                            <span className="bp3-text-large">{ result.title }</span>
                                            <span className="bp3-text-small bp3-text-muted result-snippet bp3-text-overflow-ellipsis" dangerouslySetInnerHTML={ { __html: result.snippet } }>
                                            </span>
                                        </a>
                                    </li>
                                )
                            })}    
                        </ul>
                    </div>
                )
            }
        }
    }

    render() {
        const { query } = this.state;

        return (
            <div className="searchContainer">
                <div className="bp3-input-group bp3-large searchInputContainer">
                    <span className="bp3-icon bp3-icon-search"></span>
                    <input type="text" className="bp3-input" placeholder="Search..." value={ query } onChange={ this.handleInputChange }/>
                </div>
                { this.renderSearchResults() }
            </div>
        )
    }
}

export default SearchBox;
import React, { Component } from "react";
import axios from 'axios';
import { Elevation } from "@blueprintjs/core";

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
            console.log("no query")
            this.setState({ query, results: {}, message: '' } );
        } else {
            console.log("query, man", query)
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };

    fetchSearchResults = query => {
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`
        
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
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container bp3-interactive bp3-elevation-2">
                    { results.map((result) => {
                        return (
                            <a key={ result.pageid } className="result-items bp3-text-large" href={ "http://en.wikipedia.org/?curid=" + result.pageid }>{ result.title }</a>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        const { query } = this.state;

        return (
            <div className="searchContainer">
                <div className="bp3-input-group bp3-large searchInputContainer">
                    <span className="bp3-icon bp3-icon-search"></span>
                    <input type="text" className="bp3-input" placeholder="Search..." value={ query } onChange={ this.handleInputChange }/>
                    <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
                </div>
                { this.renderSearchResults() }
            </div>
        )
    }
}

export default SearchBox;
// here's an extremely bare bones example of an autocomplete
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getArticleFromSearch } from "../actions/article"
import Downshift from "downshift";
import axios from 'axios';
import '../index.scss';

class DownshiftSearch extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    fetchResults(query) {
        const search = axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&exintro&explaintext&redirects=1&srsearch=${query}&origin=*`)

        if (query) {
            search.then(response => {
                this.setState({
                    items: response.data.query.search.map(item => {
                        return {
                            title: item.title,
                            subtitle: item.snippet,
                            url: "http://en.wikipedia.org/?curid=" + item.pageid,
                            pageid: item.pageid
                        }
                    })
                })
            })
        }
    }

    render() {
        return (
            <Downshift
                onChange={selection => {
                    if (selection) {
                        console.log(selection)
                    }
                }}
                onInputValueChange={value => this.fetchResults(value)}
                itemToString={item => (item ? item.value : '')}
            >
                {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                }) => (
                <div className="d-flex-row w-100">
                    <div className="w-75 mx-auto">
                        <input className="bp3-input bp3-large bp3-fill bp3-icon-search w-100 mx-auto" placeholder="Begin typing to search Wikipedia..." {...getInputProps()} />
                        <ul className="bp3-menu w-100 mx-auto" style={ isOpen ? { display: 'block' } : { display: 'none' } } {...getMenuProps()}>
                        {isOpen
                            ? this.state.items
                                .map((item, index) => (
                                    <li
                                        className="bp3-menu-item result-item"
                                        { ...getItemProps({
                                            key: item.pageid,
                                            index,
                                            item
                                        }) }
                                        key={item.pageid + Math.random().toString()}
                                    >
                                <NavLink to="/article" onClick={() => { this.props.getArticleFromSearch(item)} }>
                                    <span className="bp3-text-large">{item.title}</span>
                                    <span
                                        className="bp3-text-small bp3-text-muted bp3-text-overflow-ellipsis result-snippet"
                                        dangerouslySetInnerHTML={{ __html: item.subtitle }}
                                    ></span>
                                </NavLink>
                            </li>
                                ))
                            : null}
                        </ul>
                    </div>
                </div>
                )}
            </Downshift>
        )
    }

}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getArticleFromSearch: value => dispatch(getArticleFromSearch(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownshiftSearch);


// here's an extremely bare bones example of an autocomplete
import React, { Component } from "react";
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

    handleInput(value) {
        this.setState({
            items: []
        })
        
        console.log(value, this.state.items)
        const search = axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&exintro&explaintext&redirects=1&srsearch=${value}`)
        
        if (value) {
            search.then(res => res.data.query.search.map(item => {
                this.state.items.push({
                    title: item.title,
                    subtitle: item.snippet,
                    url: "http://en.wikipedia.org/?curid=" + item.pageid
                })
            })
            )
            console.log(this.state.items)
        }
    }

    fetchResults(query) {
        const search = axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&exintro&explaintext&redirects=1&srsearch=${query}`)

        if (query) {
            search.then(response => {
                this.setState({
                    items: response.data.query.search.map(item => {
                        return {
                            title: item.title,
                            subtitle: item.snippet,
                            url: "http://en.wikipedia.org/?curid=" + item.pageid
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
                alert(`You selected ${selection.value}`)
            } else {
                alert('selection cleared')
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
            <div className="searchInputContainer">
                <input className="bp3-input bp3-large bp3-fill bp3-icon-search" placeholder="Begin typing to search Wikipedia..." {...getInputProps()} />
                <ul className="bp3-menu" {...getMenuProps()}>
                {isOpen
                    ? this.state.items
                        // .filter(item => !inputValue || item.value.includes(inputValue))
                        .map((item, index) => (
                        // <li className="bp3-menu-item"
                        //     {...getItemProps({
                        //     key: item.pageid,
                        //     index,
                        //     item,
                        //     style: {
                        //         backgroundColor:
                        //         highlightedIndex === index ? 'lightgray' : null,
                        //         fontWeight: selectedItem === item ? 'bold' : 'normal',
                        //     },
                        //     })}
                        // >
                        //     {item.title}
                        // </li>
                        <li className="bp3-menu-item result-item" {...getItemProps({
                                key: item.pageid,
                                    index,
                                    item,
                                    style: {
                                        backgroundColor:
                                        highlightedIndex === index ? 'lightgray' : null,
                                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                                    },
                        })}>
                        <a href={item.url} className="">
                            <span className="bp3-text-large">{item.title}</span>
                            <span
                                className="bp3-text-small bp3-text-muted bp3-text-overflow-ellipsis result-snippet"
                                dangerouslySetInnerHTML={{ __html: item.subtitle }}
                            ></span>
                        </a>
                    </li>
                        ))
                    : null}
                </ul>
            </div>
            )}
        </Downshift>
        )
    }

}

export default DownshiftSearch;


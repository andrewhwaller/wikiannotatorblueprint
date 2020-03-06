// here's an extremely bare bones example of an autocomplete
import React, { Component } from "react";
import Downshift from "downshift";
import '../index.scss';

const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]

class DownshiftSearch extends Component {

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
                    ? items
                        .filter(item => !inputValue || item.value.includes(inputValue))
                        .map((item, index) => (
                        <li className="bp3-menu-item"
                            {...getItemProps({
                            key: item.value,
                            index,
                            item,
                            style: {
                                backgroundColor:
                                highlightedIndex === index ? 'lightgray' : null,
                                fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                            })}
                        >
                            {item.value}
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


import React, { Component } from "react";
// import { Icon } from "@blueprintjs/core";

class SearchBox extends Component {

    constructor () {
        super()
        this.state = {
        }
    }

    render() {
        return <div class="bp3-input-group searchBoxContainer">
        <span class="bp3-icon bp3-icon-search"></span>
        <input type="text" class="bp3-input" placeholder="Search" />
        <button class="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
      </div>
    }
}

export default SearchBox;
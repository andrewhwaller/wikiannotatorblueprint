import React, { Component } from "react";
// import { Button, Colors, Icon } from "@blueprintjs/core";
import cherrySearching from "../cherry-searching.png"

class Home extends Component {
    render() {
        return (
            <div id="content" className="d-flex-column h-100">
                <div className="d-flex-row my-auto">
                    <img className="my-auto ml-auto mr-5" style={ { maxHeight: "30rem" } }src={cherrySearching} alt="Logo" />
                </div>
            </div>
        );
    }
}

export default Home;

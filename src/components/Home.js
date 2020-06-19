import React, { Component } from "react";
import LoginInput from "./LoginInput"
// import cherrySearching from "../cherry-searching.png"
import blog from "../blog.svg"

class Home extends Component {
    render() {
        return (
            <div id="content" className="d-flex-column h-100">
                <div className="d-flex-row my-auto">
                    <div className="d-flex-column ml-5" style={{ width: "50%" }}>
                        <span className="hero-brand mx-auto">
                            <span className="brandText">Wiki</span>
                            <span>Annotator</span>
                        </span>
                        <h4 className="mx-auto bp3-heading" style={ { textAlign: "center" } }>Note what you need, not what you don't.</h4>
                        <div className="d-flex-column mx-auto" style={{ width: "50%" }}>
                            <LoginInput />
                        </div>
                    </div>
                    <img className="my-auto ml-5 mr-auto" style={ { maxHeight: "30rem" } }src={blog} alt="Logo" />
                </div>
            </div>
        );
    }
}

export default Home;

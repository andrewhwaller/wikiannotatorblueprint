import React, { Component } from "react";
import { connect } from "react-redux";
import LoginInput from "./LoginInput";
import RegistrationInput from "./RegistrationInput";
import PasswordReset from "./PasswordReset";
import blog from "../blog.svg";

class Home extends Component {

    renderAuthInput() {
        var authInput;
        if (this.props.authInput === "login") {
            authInput = <LoginInput />;
        } else if (this.props.authInput === "registration") {
            authInput = <RegistrationInput />;
        } else if (this.props.authInput === "password_reset") {
            authInput = <PasswordReset />;
        }
        return authInput;
    }

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
                        <div className="d-flex-column mx-auto" style={ { width: "50%" } }> 
                            { this.renderAuthInput() }
                        </div>
                    </div>
                    <div className="d-flex-column ml-5 mr-auto">
                        <img className="" style={ { maxHeight: "30rem" } } src={ blog } alt="Logo" />
                        <div className="mx-auto mt-1">Icon made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authInput: state.authInput
    }
}

export default connect(mapStateToProps)(Home);

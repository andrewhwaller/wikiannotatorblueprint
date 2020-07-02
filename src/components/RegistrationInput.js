import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthInput } from "../actions/authInput";
import { Button, InputGroup, Intent, Tooltip } from "@blueprintjs/core"

class RegistrationInput extends Component {
    constructor () {
        super();
        this.state = {
            disabled: false,
            showPassword: false,
            username: "",
            password: "",
            formValidity: "invalid"
        };
    }

    handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = () => {
    };

    render() {

        const lockButton = (
            <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`} disabled={this.state.disabled}>
                <Button
                    disabled={this.state.disabled}
                    icon={this.state.showPassword ? "unlock" : "lock"}
                    intent={this.state.showPassword ? Intent.PRIMARY : Intent.DANGER}
                    minimal={true}
                    onClick={this.handleLockClick}
                />
            </Tooltip>
        );

        return (
            <Fragment>
                <Button intent={ Intent.SECONDARY } className="mt-1 mb-1 w-100" icon={ "arrow-left" } large={ "large" } minimal={ "minimal" } onClick={ () => this.props.setAuthInput("login") }>Back to Log In</Button>
                <form>
                    <InputGroup leftIcon="user" large="true" name="username" className="mb-1" autoComplete="off" placeholder="Enter your email address..." type="email" onChange={ this.handleInputChange } />
                    <InputGroup leftIcon="key" large="true" name="password" className="mb-1" autoComplete="off" placeholder="Enter your password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } onChange={ this.handleInputChange } />
                    <InputGroup leftIcon="confirm" large="true" name="passwordConfirmation" autoComplete="off" placeholder="Confirm password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } onChange={ this.handleInputChange } />
                    <Button intent={ Intent.SUCCESS } className="mt-1 mb-1 w-100" rightIcon={ "tick" } large={ "large" } onClick={this.handleSubmit}>Create Account</Button>     
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticating: state.authenticating,
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthInput: value => dispatch(setAuthInput(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationInput);
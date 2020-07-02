import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthInput } from "../actions/authInput";
import { alertFailure } from "../actions/alert";
import { Button, InputGroup, Intent, Tooltip } from "@blueprintjs/core"
import { submitRegistrationRequest } from "../actions/registration";

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
        if (this.state.password === this.state.password_confirmation && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            let credentials = {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            };

            this.props.submitRegistrationRequest(credentials);
        } else {
            let failure;
            if (this.state.password !== this.state.password_confirmation) {
                failure = {
                    message: "Registration failed. Passwords do not match. Please try again."
                };
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
                failure = {
                    message: "Registration failed. You entered an invalid email address. Please try again."
                };
            }
            this.props.alertFailure(failure);
        }
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
                    <InputGroup leftIcon="user" large="true" name="email" className="mb-1" autoComplete="off" placeholder="Enter your email address..." type="email" onChange={ this.handleInputChange } />
                    <InputGroup leftIcon="key" large="true" name="password" className="mb-1" autoComplete="off" placeholder="Enter your password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } onChange={ this.handleInputChange } />
                    <InputGroup leftIcon="confirm" large="true" name="password_confirmation" autoComplete="off" placeholder="Confirm password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } onChange={ this.handleInputChange } />
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
        setAuthInput: value => dispatch(setAuthInput(value)),
        submitRegistrationRequest: credentials => dispatch(submitRegistrationRequest(credentials)),
        alertFailure: failure => dispatch(alertFailure(failure))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationInput);
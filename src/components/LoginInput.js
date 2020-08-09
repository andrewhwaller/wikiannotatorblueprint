import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthInput } from "../actions/authInput";
import { Button, InputGroup, Intent, Tooltip } from "@blueprintjs/core"
import { submitLoginRequest } from "../actions/authentication";

class LoginInput extends Component {
    constructor () {
        super();
        this.state = {
            disabled: false,
            showPassword: false,
            email: "",
            password: "",
            formValidity: "invalid"
        };
    }

    handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit = () => {
        let credentials = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.submitLoginRequest(credentials);
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
                <Button onClick={ () => this.props.setAuthInput("registration") } intent={ Intent.SUCCESS } className="w-100" style={{ marginTop: "1rem", marginBottom: "1rem"}} large={ "large" } minimal={ "minimal" }>Create account?</Button>
                <form>
                    <InputGroup leftIcon="user" large="true" name="email" className="mb-1" autoComplete="off" placeholder="Enter your email address..." type="email" onChange={ this.handleInputChange } />
                    <InputGroup leftIcon="key" large="true" name="password" autoComplete="off" placeholder="Enter your password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } onChange={ this.handleInputChange } />
                    <Button intent={ Intent.PRIMARY } className="mt-1 mb-1 w-100" rightIcon={ "log-in" } large={ "large" } onClick={ this.handleSubmit }>Log In</Button>     
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthInput: value => dispatch(setAuthInput(value)),
        submitLoginRequest: credentials => dispatch(submitLoginRequest(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginInput);
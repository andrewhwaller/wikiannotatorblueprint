import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthInput } from "../actions/authInput";
import { Button, InputGroup, Intent, Tooltip } from "@blueprintjs/core"

class LoginInput extends Component {
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
                <Button onClick={ () => this.props.setAuthInput("registration") } intent={ Intent.SUCCESS } className="w-100" style={{ marginTop: "1rem", marginBottom: "1rem"}} large={ "large" } minimal={ "minimal" }>Create account?</Button>
                <InputGroup leftIcon="user" large="true" name="username" className="mb-1" placeholder="Enter your email address..." type="email" onChange={ this.handleInputChange } />
                <InputGroup leftIcon="key" large="true" name="password" placeholder="Enter your password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } onChange={ this.handleInputChange } />
                <Button intent={ Intent.PRIMARY } className="mt-1 mb-1 w-100" rightIcon={ "log-in" } large={ "large" } onClick={this.handleSubmit}>Log In</Button>     
                {/* <Button onClick={ () => this.props.setAuthInput("password_reset") } intent={ Intent.NONE } className="mx-auto w-100" rightIcon={ "help" } large={ "small" } minimal={ "minimal" }>Forgot password?</Button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginInput);
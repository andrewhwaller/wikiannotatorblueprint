import React, { Component, Fragment } from "react";
import { Button, InputGroup, Intent, Tooltip } from "@blueprintjs/core"

class LoginInput extends Component {
    constructor () {
        super();
        this.state = {
            disabled: false,
            showPassword: false,
        };
    }

    handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

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
                <InputGroup leftIcon="user" large="true" className="mb-1" placeholder="Enter your email address..." type="email" />
                <InputGroup leftIcon="key" large="true" placeholder="Enter your password..." type={ this.state.showPassword ? "text" : "password" } rightElement={ lockButton } />
                <Button intent={ Intent.PRIMARY } className="mt-1 mb-1 w-100" rightIcon={ "log-in" } large={ "large" } >Log In</Button>     
            </Fragment>
        )
    }
}

export default LoginInput;
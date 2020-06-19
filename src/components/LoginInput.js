import React, { Component } from "react";
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
                    intent={Intent.WARNING}
                    minimal={true}
                    onClick={this.handleLockClick}
                />
            </Tooltip>
        );

        return (
            <div>
                <InputGroup leftIcon="user" large="true" className="mb-1 mt-5" placeholder="Enter your email address..." type="email" />
                <InputGroup leftIcon="key" large="true" placeholder="Enter your password..." type={ this.state.showPassword ? "text" : "password"} rightElement={ lockButton }/>
            </div>
        )
    }
}

export default LoginInput;
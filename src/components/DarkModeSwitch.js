import React from "react";
import { Switch } from "@blueprintjs/core";

class DarkModeSwitch extends Switch {

    constructor () {
        super()
        this.handleSwitch = this.handleSwitch.bind(this)
        this.state = {
            checked: false
        }
    }

    handleSwitch(event) {
        this.setState({
            checked: !this.state.checked
        })
        this.props.changeMode(!this.state.checked)
    }

    render() {
        console.log(this.props)
        return <Switch
            checked={ this.state.checked }
            label="Dark Mode"
            onChange={ this.handleSwitch }
        />
    }
}

export default DarkModeSwitch;
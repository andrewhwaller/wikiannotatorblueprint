import React from "react";
import { Switch, Icon } from "@blueprintjs/core";

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
        return <div className="switchContainer">
            <Icon icon="moon" className="switchIcon" />
            <Switch
                checked={ this.state.checked }
                onChange={ this.handleSwitch }
                />
        </div>
    }
}

export default DarkModeSwitch;
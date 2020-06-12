import React from "react";
import { connect } from "react-redux";
import { Switch, Icon } from "@blueprintjs/core";
import { changeMode } from "../actions/darkMode";

class DarkModeSwitch extends Switch {
    constructor() {
        super();
        this.handleSwitch = this.handleSwitch.bind(this);
        this.state = {
            checked: false
        };
    }

    handleSwitch(event) {
        this.setState({
            checked: !this.state.checked
        });
        this.props.changeMode(this.state.checked)
    }

    render() {
        return (
            <div className="switchContainer">
                <Icon icon="moon" className="switchIcon" />
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleSwitch}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMode: value => dispatch(changeMode(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeSwitch);

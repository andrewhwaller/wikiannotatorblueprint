import React, { Component } from 'react';
import { Navbar } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import { Alignment, FocusStyleManager, Icon, Intent, Menu, MenuItem, Popover, Position } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import DarkModeSwitch from "./DarkModeSwitch"

FocusStyleManager.onlyShowFocusOnTabs();

class Header extends Component {
    render() {

        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <span className="brand">
                            <span className="brandText">Wiki</span><span>Annotator</span>
                        </span>
                    </Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="home" text="Home" />
                </Navbar.Group>
                <Navbar.Group align={ Alignment.RIGHT }>
                    <Popover className="bp3-align-right"
                        content={
                            <Menu>
                                <MenuItem icon="user" text="Profile" />
                                <MenuItem icon="document" text="Digests" />
                                <MenuItem icon="cog" text="Settings" />
                            </Menu>
                        }
                        position={ Position.LEFT_BOTTOM }>
                        <Button className="bp3-minimal" text="Menu" />
                    </Popover>
                    <DarkModeSwitch changeMode={this.props.changeMode} />
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default Header;
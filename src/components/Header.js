import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import { Alignment, FocusStyleManager, Menu, MenuItem, Popover, Position } from "@blueprintjs/core";
import DarkModeSwitch from "./DarkModeSwitch"

FocusStyleManager.onlyShowFocusOnTabs();

class Header extends Component {

    render() {

        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <NavLink to="/" className="brand" intent="secondary" style={{textDecoration: "none"}}>
                            <span className="brandText">Wiki</span><span>Annotator</span>
                        </NavLink>
                    </Navbar.Heading>
                    <Navbar.Divider />
                    <NavLink to="/" className="bp3-button bp3-minimal bp3-icon-home header-button" activeClassName="bp3-active" exact>
                        Home
                    </NavLink>
                    <NavLink to="/search" className="bp3-button bp3-minimal bp3-icon-search header-button" activeClassName="bp3-active">
                        Search
                    </NavLink>
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
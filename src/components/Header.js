import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
    Alignment,
    Button,
    FocusStyleManager,
    Menu,
    MenuItem,
    Navbar,
    Popover,
    Position
} from "@blueprintjs/core";
import DarkModeSwitch from "./DarkModeSwitch";

FocusStyleManager.onlyShowFocusOnTabs();

class Header extends Component {
    render() {
        let searchTab;
        let articlesTab;
        let userMenu;

        if (this.props.authenticated) {
            searchTab = <NavLink
                to="/search"
                className="bp3-button bp3-minimal bp3-icon-search header-button"
                activeClassName="bp3-active"
            >
                Search
            </NavLink>;

            articlesTab = <NavLink
                to="/articles"
                className="bp3-button bp3-minimal bp3-icon-list header-button"
                activeClassName="bp3-active"
            >
                Saved articles
            </NavLink>;

            userMenu = <Popover className="bp3-align-right"content={
                    <Menu>
                        <MenuItem icon="user" text="Profile" />
                        <MenuItem icon="document" text="Digests" />
                        <MenuItem icon="cog" text="Settings" />
                    </Menu>
                }
                position={Position.LEFT_BOTTOM}
            >
                <Button className="bp3-minimal" text="Menu" />
            </Popover>
        }
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <span className="brand">
                            <span className="brandText">Wiki</span>
                            <span>Annotator</span>
                        </span>
                    </Navbar.Heading>
                    <Navbar.Divider />
                    <NavLink
                        to="/"
                        className="bp3-button bp3-minimal bp3-icon-home header-button"
                        activeClassName="bp3-active"
                        exact
                    >
                        Home
                    </NavLink>
                    { searchTab }
                    { articlesTab }
                    { this.props.article.length !== 0 && 
                        <NavLink
                            to="/article"
                            className="bp3-button bp3-minimal bp3-icon-edit header-button"
                            activeClassName="bp3-active"
                        >
                            Edit article
                        </NavLink>
                    }
                </Navbar.Group>
                <Navbar.Group align={ Alignment.RIGHT }>
                    { userMenu }
                    <DarkModeSwitch changeMode={this.props.changeMode} />
                </Navbar.Group>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        article: state.article,
        authenticated: state.authenticated
    }
}

export default connect(mapStateToProps)(Header);

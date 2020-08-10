import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {
    Alignment,
    FocusStyleManager,
    Navbar,
} from "@blueprintjs/core";
import DarkModeSwitch from "./DarkModeSwitch";
import { logoutUser } from "../actions/authentication";

FocusStyleManager.onlyShowFocusOnTabs();

class Header extends Component {
    constructor () {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }
        
    handleLogout = async function() {
        await this.props.logoutUser();
        await this.props.history.push("/logout")
        this.props.history.push("/")
    };

    render() {
        let searchTab;
        let articlesTab;
        let logOutButton;
        let url;

        if (this.props.authenticated) {
            searchTab = <NavLink
                to="/search"
                className="bp3-button bp3-minimal bp3-icon-search header-button"
                activeClassName="bp3-active"
            >
                Search
            </NavLink>;

            articlesTab = <NavLink
                exact
                to="/articles"
                className="bp3-button bp3-minimal bp3-icon-list header-button"
                activeClassName="bp3-active"
            >
                Saved articles
            </NavLink>;

            logOutButton =  <Link
                to="/"
                className="bp3-button bp3-minimal bp3-icon-log-out header-button"
                onClick={ this.handleLogout }
            >
                Log out
            </Link>
        }

        if (this.props.article.id) {
            url = "/articles/" + this.props.article.id + "/edit"
        } else if (!this.props.article.id) {
            url = "/article/new"
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
                    { this.props.article.pageid && this.props.authenticated &&
                        <NavLink
                        to={ url }
                            className="bp3-button bp3-minimal bp3-icon-edit header-button"
                            activeClassName="bp3-active"
                        >
                            Edit article
                        </NavLink>
                    }
                </Navbar.Group>
                <Navbar.Group align={ Alignment.RIGHT }>
                    { logOutButton }
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

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);

// React components
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Blueprint.js components

// CSS
import "./App.css";
import "./index.scss";

// Custom components
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import TextDisplay from "./components/TextDisplay";

// Actions
import { setArticle, getArticle } from "./actions/article";
import { changeMode } from "./actions/darkMode";

class App extends Component {

    render() {
        document.body.className = this.props.darkMode ? "bp3-dark" : "";

        return (
            <Switch>
                <Route>
                    <div
                        className={this.props.darkMode ? `light-bg` : `dark-bg`}
                    >
                        <Header changeMode={ this.props.changeMode } />
                        <Route component={ Home } exact path="/" />
                        <Route component={ Search } exact path="/search" />
                        <Route component={ TextDisplay } exact path="/article" />
                    </div>
                </Route>
            </Switch>
        );
    };
}

const mapStateToProps = state => {
    return ({
        article: state.article,
        darkMode: state.darkMode
    })
}

export default connect(mapStateToProps, { setArticle, getArticle, changeMode })(App);

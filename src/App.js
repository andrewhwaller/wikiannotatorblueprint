// React components
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

// Blueprint.js components

// CSS
import "./App.css";
import "./index.scss";

// custom components
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import TextDisplay from "./components/TextDisplay";

// actions
import { displayArticle } from './actions/displayArticle';

class App extends Component {
    constructor() {
        super();
        this.state = {
            darkMode: false
        };
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode = value => {
        this.setState({ darkMode: value });
    };

    simpleAction = (event) => {
        this.props.simpleAction();
    }

    render() {
        document.body.className = this.state.darkMode ? "bp3-dark" : "";

        return (
            <Switch>
                <Route>
                    <div
                        className={this.state.darkMode ? `light-bg` : `dark-bg`}
                    >
                        <Header changeMode={ this.changeMode } />
                        <pre>{ JSON.stringify(this.props) }</pre>
                        <Route component={ Search } exact path="/search" />
                        <Route component={ TextDisplay } exact path="/article" />
                        <Route component={ Home } exact path="/" />
                    </div>
                </Route>
            </Switch>
        );
    };
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    displayArticle: () => dispatch(displayArticle())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

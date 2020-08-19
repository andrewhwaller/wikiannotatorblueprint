// React components
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";

// Blueprint.js components

// CSS
import "./App.css";
import "./index.scss";

// Custom components
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import TextDisplay from "./components/TextDisplay";
import ArticleList from "./components/ArticleList";

// Actions
import { setArticle, getArticleFromSearch, setLoadingTrue, setLoadingFalse } from "./actions/article";
import { changeMode } from "./actions/darkMode";
import { setToken, loginSuccess } from "./actions/authentication";

class App extends Component {

    componentDidMount() {
        if (Cookies.get("auth_token")) {
            this.props.setToken(Cookies.get("auth_token"))
            this.props.loginSuccess()
        }
    }

    render() {
        document.body.className = this.props.darkMode ? "bp3-dark" : "";

        return (
            <div className={this.props.darkMode ? `light-bg` : `dark-bg`}>
                <Header changeMode={ this.props.changeMode } />
                <Switch>
                    <Route component={ Home } exact path="/" />
                    <Route path="/search" component={ Search } />
                    <Route exact path="/articles" component={ ArticleList } />
                    <Route component={ TextDisplay } path="/articles/:id/edit" />
                    <Route component={ TextDisplay } path="/article/new" />
                </Switch>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return ({
        article: state.article,
        articleLoading: state.articleLoading,
        authenticated: state.authenticated,
        darkMode: state.darkMode,
        token: state.token
    })
}

export default connect(mapStateToProps, 
                        { 
                            setArticle, 
                            getArticleFromSearch, 
                            setLoadingTrue, 
                            setLoadingFalse, 
                            changeMode,
                            setToken,
                            loginSuccess
                        })(App);

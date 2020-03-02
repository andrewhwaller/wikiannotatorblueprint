import React, { Component } from 'react';
import './App.css';
import './index.scss';
import Header from './components/Header.js'
import Search from './components/Search'
import Home from './components/Home'
import {
    Switch,
    Route,
  } from 'react-router-dom';

class App extends Component {

    constructor () {
        super()
        this.state = {
            darkMode: false
        }
        this.changeMode = this.changeMode.bind(this)
    }

    changeMode = value => {
        this.setState({ darkMode: value });
    }

    render() {

        document.body.className = ((this.state.darkMode) ? "bp3-dark" : "");
        
        return (
            <Switch>
                <div className={((this.state.darkMode) ? "light-bg" : "dark-bg")}>
                    <Header changeMode={ this.changeMode } />
                    <Route component={ Search } exact path="/search" />
                        {/* <Search /> */}
                    {/* </Route> */}
                    <Route component={ Home } path="/" />
                        {/* <Home /> */}
                    {/* </Route> */}
                </div>
            </Switch>
        );
    }
}

export default App;
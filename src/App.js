import React, { Component } from 'react';
import './App.css';
import './index.scss';
import Header from './components/Header.js'
import Search from './components/Search'

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
            <div className={((this.state.darkMode) ? "light-bg" : "dark-bg")}>
                <Header changeMode={ this.changeMode } />
                <Search />
            </div>
        );
    }
}

export default App;
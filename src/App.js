import React, { Component } from 'react';
import './App.css';
import './index.scss';
import Header from './components/Header.js'
import SearchBox from './components/SearchBox';

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
        // const darkMode = this.state.darkMode
        document.getElementById("root").className = ((this.state.darkMode) ? "bp3-dark" : "");
        return (
            <div>
                <Header changeMode={ this.changeMode } />
                <div id="content">
                    <SearchBox />
                </div>
            </div>
        );
    }
}

export default App;
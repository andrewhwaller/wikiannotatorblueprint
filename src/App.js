import React, { Component } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header.js'

class App extends Component {

    constructor () {
        super()
        this.state = {
            darkMode: false
        }
        this.changeMode = this.changeMode.bind(this)
    }

    changeMode = value => {
        console.log(value)
        this.setState({ darkMode: value });
    }

    render() {

        const darkMode = this.state.darkMode
        console.log(darkMode)
        return (
            <div
                className={`${darkMode ? 'bp3-dark' : 'bp3-light'}`}
            >
                <Header changeMode={this.changeMode} />
            </div>
        );
    }
}

export default App;
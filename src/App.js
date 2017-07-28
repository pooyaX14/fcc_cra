import React, { Component } from 'react';
import logo from './logo.svg';
import MusicApp from './MusicApp';

import './App.css';

class App extends Component {
  render() {
    var name = "Purnima";

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {/*
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}

        <MusicApp person={name} color={"text-primary"} />
      </div>
    );
  }
}

export default App;

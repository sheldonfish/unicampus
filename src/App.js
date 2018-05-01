import React, { Component } from 'react';
import logo from './uni128.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Unicampus Updating..</h1>
        </header>
        <p className="App-intro">
          Please come back later after <code>the code</code> updated.
        </p>
      </div>
    );
  }
}

export default App;

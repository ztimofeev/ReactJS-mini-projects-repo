import React, { Component } from 'react';
import './App.css';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Please Add Or Delete a Person!</h1>
        </div>
        <Persons />
      </div>
    );
  }
}

export default App;

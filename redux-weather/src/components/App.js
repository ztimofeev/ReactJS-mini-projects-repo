import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Redux Weather App</h1>
        </header>
        <div className="container">
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;

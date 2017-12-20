import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { voteAngular, voteReact, voteVuejs } from './actons/index';

class App extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
  }

  handlerVoteAngular() {
    this.store.dispatch(voteAngular())
  }

  handlerVoteReact() {
    this.store.dispatch(voteReact())
  }

  handlerVoteVuejs() {
    this.store.dispatch(voteVuejs())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React+Redux Mini Vote App</h1>
        </header>
        <div className="jumbotron" style={{ 'textAlign': 'center' }}>
          <img src="banner_ReactRedux.png" height="80" alt="central logo" />
          <h2 style={{'marginTop': '20px'}}>What is your favorit framefork in 2017:</h2>
          <h5>Click on the logos to vote!</h5>
          <div className="row">
            <div className="offset-3 col-2 logos">
              <img src="angular_logo.png" height="60" alt="angular" onClick={() => this.handlerVoteAngular()} />
            </div>
            <div className="col-2 logos">
              <img src="react_logo.png" height="60" alt="react" onClick={() => this.handlerVoteReact()} />
            </div>
            <div className="col-2 logos">
              <img src="vuejs_logo.png" height="60" alt="vuejs" onClick={() => this.handlerVoteVuejs()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

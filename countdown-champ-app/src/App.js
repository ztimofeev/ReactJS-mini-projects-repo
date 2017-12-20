import React, { Component } from 'react';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Countdown Champ</h1>
        </header>

        <div>
          <div className="header">Countdown to {this.state.deadline}</div>
          <Clock deadline={this.state.deadline}/>
          <Form inline>
            <FormControl 
              placeholder="Enter the date" 
              onChange={event => this.setState({newDeadline: event.target.value})}/>
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;

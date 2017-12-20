import React, { Component } from 'react';
import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    
    ageChangedHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div className="AddPerson">
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.nameChangedHandler} />
                <input
                    type="number"
                    age="age"
                    value={this.state.age}
                    onChange={this.ageChangedHandler} />
                <br />
                <button 
                    onClick={() => 
                    this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;
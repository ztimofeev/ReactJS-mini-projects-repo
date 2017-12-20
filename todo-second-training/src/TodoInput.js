import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'lowest'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'lowest'
    })
  }

  render() {
    return (
      <div>
       <h1 className="card-title"><strong>Add Todo</strong></h1>
       <form className="form-horizontal" onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="inputTodoTitle" className="aria-label">Todo</label>
          <input type="text"
                 name="todoTitle"
                 className="form-control"
                 id="inputTodoTitle"
                 value={this.state.todoTitle}
                 onChange={this.handleInputChange}
                 placeholder="Title" />
        </div>
        <div className="form-group">
          <label htmlFor="InputResponsible" className="aria-label">Responsible</label>
          <input type="text"
                 name="todoResponsible"
                 className="form-control"
                 id="inputResponsible"
                 value={this.state.todoResponsible}
                 onChange={this.handleInputChange}
                 placeholder="Responsible" />
        </div>
        <div className="form-group">
          <label htmlFor="InputDescription" className="aria-label">Description</label>
          <textarea type="text"
                 rows="3"
                 name="todoDescription"
                 className="form-control"
                 id="inputDescription"
                 value={this.state.todoDescription}
                 onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="InputPriority" className="aria-label">Priority</label>
          <select
                 rows="3"
                 name="todoPriority"
                 className="form-control"
                 id="inputPriority"
                 value={this.state.todoPrioriry}
                 onChange={this.handleInputChange}>
            <option>Lowest</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Highest</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Add TODO</button>
        </div>
       </form>
       <hr />
      </div>
    );
  }
}

export default TodoInput;
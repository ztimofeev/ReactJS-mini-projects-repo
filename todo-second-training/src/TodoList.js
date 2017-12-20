import React, { Component } from 'react';
import TodoInput from './TodoInput';

let todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Zdravko',
    todoDescription: 'That is the discription',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Zdravko',
    todoDescription: 'That is the discription',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Zdravko',
    todoDescription: 'That is the discription, I would like to add more and more information about my tasks, and to do my best to realize all of them',
    todoPriority: 'high'
  },
]

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos
    }

    this.addTodo = this.addTodo.bind(this);
  }

  removeHandler(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      }) 
    })
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.addTodo}/>
        <h4>Todo Count: <span className="badge badge-pill badge-dark">{this.state.todos.length}</span></h4>
        <div>
          <ul className="list-group">
            {this.state.todos.map((todo, index) => {
              return <li key={todo + index} className="list-group-item list-group-item-primary">
                <h4>{todo.todoTitle}<small><span className="badge badge-warning">{todo.todoPriority}</span></small></h4>
                <p>{todo.todoResponsible}</p>
                <div className="description">
                  <p><em><strong>Description:</strong> {todo.todoDescription}</em></p>
                </div>
                <button className="btn btn-danger btn-sm" onClick={this.removeHandler.bind(this, index)}>Delete</button>
              </li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
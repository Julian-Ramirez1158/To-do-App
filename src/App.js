import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Pack toothbrush'},
      {id: 2, content: 'Pack hair gel'},
      {id: 3, content: 'Pack dress shirts'},
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="Header center white-text">Travel Bag</h1>
        <h6 className="Instructions center white-text">Click on the list items to check them off of your packing list</h6>
        <Todos className="list-item" todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
        <AddTodo className="list-item" addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

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
        <h1 className="center blue-text">Travel Bag</h1>
        <h6 className="center green-text">Click on the list items to check then off of your packing list</h6>
        <Todos todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id: 0, content: 'Complete NetNinja'},
        {id: 1, content: 'Complete Udemy'}
      ]
    }
  }
  render() {
    return (
      <div className="TodoApp container">
        <h2 className='text-center text-dark'>My React Todo List</h2>
        <TodoList todos={this.state.todos} />
        {/* <AddForm /> */}
      </div>
    );
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id: 0, content: 'Complete NetNinja'},
        {id: 1, content: 'Complete Udemy'}
      ],
      id: 2
    }
  }
  handleDelete = (id) => {
    let newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos
    })
  }

  handleAddTodo = (newTodo) => {
    console.log(newTodo)
    let todo = {id: this.state.id, content: newTodo}
    let newTodos = this.state.todos
    newTodos.push(todo)
    let newId = this.state.id
    newId++
    this.setState({
      todos: newTodos,
      id: newId
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="TodoApp container">
        <h2 className='text-center text-dark'>My React Todo List</h2>
        <AddTodo addTodo={this.handleAddTodo} />
        <TodoList todos={this.state.todos} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App

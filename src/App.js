import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id: 0, content: `Add Todo's Here`}
      ],
      id: 1
    }
  }

  handleDelete = (id) => {
    //make new array and take out todo with matching id
    let newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos
    })
  }

  handleAddTodo = (newTodo) => {
    // create todo object
    let todo = {id: this.state.id, content: newTodo}
    // make new todo list and push the new todo
    let newTodos = this.state.todos
    newTodos.push(todo)
    // increment id count
    let newId = this.state.id
    newId++
    // update state to display updated todos
    this.setState({
      todos: newTodos,
      id: newId
    })
  }

  render() {
    return (
      <div className="TodoApp container">
        <h2 className='text-center text-dark my-5'>My React Todo List</h2>
        <AddTodo addTodo={this.handleAddTodo} />
        <TodoList todos={this.state.todos} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App

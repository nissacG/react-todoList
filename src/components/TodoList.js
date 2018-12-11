import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  handleTodos () {
    return this.props.todos[0]
    ? this.props.todos.map( todo => {
        return <Todo task={todo.content} key={todo.id} id={todo.id} delete={this.props.delete} />
      })
    : `No Todo's!`
  }
  render() {
    return (
      <ul className='card col-md-6 mt-3 mx-auto text-secondary p-0' >
        {this.handleTodos()}
      </ul>
    )
  }
}

export default TodoList

import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    let todoList = this.props.todos.map( todo => {
      return <Todo task={todo.content} key={todo.id} />
    })
    return (
      < ul className = 'card col-md-4 mx-auto text-secondary' >
        {todoList}
      </ul>
    )
  }
}

export default TodoList

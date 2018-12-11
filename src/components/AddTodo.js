import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  
  addTodo = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
    document.getElementById('form').reset()
  }

  render() {
    return (
      <form id='form' className='text-center mx-auto col-md-6 p-0' onSubmit={this.addTodo}>
        <input type='text' id='addTodo' placeholder='Add Todo' className='form-control' onChange={this.handleChange}></input>
      </form>
    )
  }
}

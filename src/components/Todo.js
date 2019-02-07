import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <div className='card-body' style={{ padding: '0.7rem' }}>
        <li className='text-center d-flex justify-content-around align-items-center' >
          <span className='col-md-9'>{this.props.task}</span>
          <button name='delete' className='btn btn-outline-secondary' type='button' onClick={() => this.props.delete(this.props.id)}>X</button>
        </li>
      </div>
    )
  }
}

export default Todo

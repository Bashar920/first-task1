import React, { Component } from 'react'
export default class ToDo extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='task'>
        {
            this.props.taskName 
        }
      </div>
    )
  }
}

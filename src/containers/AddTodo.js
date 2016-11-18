import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

require('./AddTodo.scss')

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="add-to-do">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="add-to-do-input">
        <input ref={node => {
          input = node
        }}/>
          </div>
        <div className="add-to-do-button">
          Add
          <button type="submit">

          </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

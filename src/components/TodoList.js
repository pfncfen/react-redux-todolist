import React, { PropTypes } from 'react'
import Todo from './Todo'

require('./TodoList.scss')

const TodoList = ({ todos, onTodoClick , onTodoModify}) => (
  <div className="todo-items-wrapper">
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onModifyConfirm={(text) => onTodoModify(todo.id, text)}
        />
      )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList

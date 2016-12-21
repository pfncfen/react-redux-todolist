import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import undoable, { distinctState } from 'redux-undo';

const todoApp = combineReducers({
  todos: undoable(todos, { filter: distinctState() }),
  visibilityFilter
})

export default todoApp

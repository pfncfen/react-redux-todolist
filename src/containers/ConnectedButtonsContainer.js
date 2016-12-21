import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo';

const mapStateToProps = (state) => ({
  todos: state.todos
})


class ButtonsContainer extends React.Component {

  render () {
    const { dispatch, todos } = this.props;
    return (
      <div className="buttons-container">
        <p>
          <button onClick={()=>dispatch(ActionCreators.undo())} disabled={todos.past.length === 0}>Undo</button>
          <button onClick={()=>dispatch(ActionCreators.redo())} disabled={todos.future.length === 0}>Redo</button>
        </p>
      </div>
    )
  }
}

let ConnectedButtonsContainer = connect(mapStateToProps)(ButtonsContainer)

export default ConnectedButtonsContainer

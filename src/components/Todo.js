import React, { PropTypes } from 'react'

require('./Todo.scss')

class Todo extends React.Component{

  constructor (props, context) {
    super(props, context);
    this.state = {
      modify: false,
      text: this.props.text
    }
  }

  render () {
    return (
      <div className="todo-item">
        { this.state.modify?
          <input className="to-do-input" value={this.state.text} onChange={(e)=>this.handleInputChange(e)} onKeyDown={(e)=>this.handleKeyDown(e)}></input>
          :
          <li className="to-do"
              onClick={this.props.onClick}
              style={{
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }}
          >
            {this.props.text}
            <div className="a-button">
              Modify
              <button onClick={()=>this.changeToModify()}></button>
              </div>
          </li>

        }


      </div>
    );
  }

  changeToModify(){
    this.setState({modify:true});
  }

  handleKeyDown(e)  {
    if(e.keyCode === 13)
    {
      e.preventDefault();
      this.props.onModifyConfirm(this.state.text);
      this.setState({modify:false})
    }
  }

  handleInputChange(e){
      this.setState({text: e.target.value});
  }

}

Todo.propTypes = {
  onModifyConfirm:PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

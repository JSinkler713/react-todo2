import React, { Component } from 'react';
import TodoFormUpdate from './TodoFormUpdate';

class Todo extends Component {

  state = {
    formStyle: {
      display: 'none'
    }
  }
  
  deleteClickedTodo = () => {
    this.props.deleteTodo(this.props.todo)
  }

  // when edit button is clicked show the form
  toggleBodyForm = () => {
    this.state.formStyle.display === 'block'
    ? this.setState({ formStyle: { display: 'none' } })
    : this.setState({ formStyle: { display: 'block' } })
  }

  render() {
    return (
      <li data-todos-index={this.props.todo._id}>
        <div>
          <span className="todo-item">{this.props.todo.body}</span>
          <span
            className='edit' 
            onClick={this.toggleBodyForm}>
            Edit
          </span>
          <span
            className='remove'
            onClick={this.deleteClickedTodo}>
            Remove
          </span>
          <TodoFormUpdate
            todo={this.props.todo}
            style={this.state.formStyle}
            autoFocus={true}
            buttonName="Update Todo!"
            updateTodo={this.props.updateTodo}
            toggleBodyForm={this.toggleBodyForm} />
        </div>
      </li> 
    );
  };
};

export default Todo;

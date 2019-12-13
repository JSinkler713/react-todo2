import React, { Component } from 'react'

class CreateTodoForm extends Component {
  state= {
    todo:''
  }
  
  //function to update state based on change in input form
  onInputChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  //function to call the createfunction which was passed down with props
  //this function will update state where it was defined in TodosContainer
  onFormSubmit = (event) => {
    //so form doesn't reload page
    event.preventDefault();
    //assign variable the todo which was updated by previous function
    let todo = this.state.todo;
    //calls function passed down as props passing in argument of todo
    this.props.createTodo(todo);
    //resets the todo to be blank for the next todo to be created
    this.setState({
      todo: '',
    });
  };


  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input
            onChange={this.onInputChange}
            type="text" id="newItemDescription"
            placeholder="What do you need to do?"
            value={this.state.todo}
          />
          <button type="submit" id="addTask" className="btn">Add Todo</button>
        </form>
      </div>
    );
  };
};


export default CreateTodoForm;
//we will import this in our TodosContainer

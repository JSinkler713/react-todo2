import React, { Component } from 'react';
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'


class TodosContainer extends Component {
  state= {
    todos: []
  }
  
  componentDidMount() {
    this.fetchData();
  };
  
  fetchData = () => {
    TodoModel.all().then((res) => {
      this.setState ({
        todos: res.todos,
      });
    });
  };

  //this function will be passed down as a prop into the CreateTodoForm
  //in that component the user provides input to create a new todo
  //when the function is run it will update the state here
  createTodo = (todo) => {
    let newTodo = {
        body: todo,
        completed: false,
    };
   

    //We pass the todoObject to a .create method on our TodoModel from src/models/Todo.js ... the createmethod uses fetch with a POST request to update the db
    TodoModel.create(newTodo).then((res) => {
        let todos = this.state.todos;
        todos.push(res);
        //updates state here although it will be called in CreateTodoForm
        this.setState({ todos: todos });
    });
  }

  render() {
    return (
      <div className="todosComponent">
      <CreateTodoForm
        createTodo={this.createTodo} />
        <Todos
          todos={this.state.todos} />
      </div>
    );
  };
};

export default TodosContainer;

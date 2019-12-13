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
  
  //deletetodofunction will be passed down as props to Todo but this state will be updated
  //when it is called because 'this' will refer to this container
  deleteTodo = (todo) => {
    TodoModel.delete(todo).then(data => {
      let todos = this.state.todos.filter(todo => {
        return todo._id !== data._id;
      })
      this.setState({ todos })
    })
  }

  render() {
    return (
      <div className="todosComponent">
      <CreateTodoForm
        createTodo={this.createTodo} />
        <Todos
          todos={this.state.todos}
          //add in delete function as props
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  };
};

export default TodosContainer;


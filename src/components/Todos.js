import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
  let todos = props.todos.map((todo) => {
    return (
      <Todo
        //need the key for when we update the todo and React wants keys
        key={todo._id}
        todo={todo}
        deleteTodo={props.deleteTodo} 
        updateTodo={props.updateTodo}
      />
    );
  });

  return (
    <ul>
      {todos}
    </ul>
  );
};

export default Todos;

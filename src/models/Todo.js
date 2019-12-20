const endPoint = `https://super-crud-api.herokuapp.com/api/todos`;

class TodoModel {
  static all = () => {
    return fetch(endPoint)
      // return a promise with response.json() that we can use to load todos from the DB in frontend components
      .then(response => response.json())
      .catch(err => console.log('Could not get all todos\n', err));
  };

  //create method to Post a new todo, make body JSON with stringify
  static create = (todo) => {
    return fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(todo)
    })
      .then(response => response.json())
      .catch(err => console.log('Could not post todo \n', err));
  }

  static delete = (todo) => {
    return fetch(`${endPoint}/${todo._id}`, { 
      method: "DELETE" 
    })
      .then(response => response.json())
      .catch(err => console.log('Could not delete todo \n', err));
  };
  static update = (todo) => {
    return fetch(`${endPoint}/${todo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(todo)
    })
      .then(response => response.json())
      .catch(err => console.log('Could not update todo \n', err));
  };
};
export default TodoModel

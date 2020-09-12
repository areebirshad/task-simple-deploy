const { default: config } = require("../config/config");

export function getAllTodos() {
    return fetch(config.BASE_URL)
    .then((success)=>{
        debugger;
return success.json()
    }).then((success2)=>{
        debugger;
        return success2;    
    }).catch((error)=>{
        debugger;
    })
}
export function addTodo({title,order,completed=false}) {
    return fetch(config.BASE_URL, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title,order,completed}),
      }).then((success)=>{
        return success;
      }).catch((error)=>{
        return error;
      })
}
export function deleteTodo(id) {
    return fetch(`${config.BASE_URL}/${id}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((success)=>{
        return success;
      }).catch((error)=>{
        return error;
      })
}
export function onEditTodo({id,completed}) {
    return fetch(`${config.BASE_URL}/${id}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({completed}),
      }).then((success)=>{
        return success;
      }).catch((error)=>{
        return error;
      })
}
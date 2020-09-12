const { default: config } = require("../config/config");
export function onEditTodo({id,completed}) {
        return fetch(`${config.BASE_URL}/${id}`, {
            method: 'PATCH', 
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
        method: 'POST', 
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
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((success)=>{
        return success;
      }).catch((error)=>{
        return error;
      })
}
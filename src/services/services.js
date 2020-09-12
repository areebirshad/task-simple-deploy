const { default: config } = require("../config/config");

export function getAllTodos() {
    return fetch(config.BASE_URL)
    .then((success)=>{
        debugger;
return success.json()
    }).then((success2)=>{
        debugger;
        return success2;
        console.log(success2);
    }).catch((error)=>{
        debugger;
    })
}
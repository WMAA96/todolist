import Todo from "./todo";

function createTodo(title, description) {

    let todo = new Todo(title, description);
    console.log(todo);

}




export {createTodo};
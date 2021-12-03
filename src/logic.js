import Project from "./project";
import Todo from "./todo";

function createTodo(title, description) {

    let todo = new Todo(title, description);
    console.log(todo);

}

function createProject(name) {
    let project = new Project(name);
    console.log(project);
}




export {createTodo, createProject};
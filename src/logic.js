import Project from "./project";
import Todo from "./todo";
import {appendProject} from "./dom"

function createTodo(title, description) {

    let todo = new Todo(title, description);
    console.log(todo);

}

function createProject(pname) {

    let project = new Project(pname);
    appendProject(project);

    
}




export {createTodo, createProject};
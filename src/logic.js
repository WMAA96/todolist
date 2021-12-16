import Project from "./project";
import Todo from "./todo";
import {appendProject, appendTodos} from "./dom"
import TodoList from "./TodoList";

let projectHolder = [];


function createTodo(title, description, currentProject) {

    let todo = new Todo(title, description);
    
    
    let result = projectHolder.filter(x => x.name === currentProject);
    
    result[0].addTask(todo);
    console.log(projectHolder);

    appendTodos(todo);


}

function createProject(pname) {

    let project = new Project(pname);
    projectHolder.push(project);
    console.log(projectHolder);

    appendProject(project);
    

    
}




export {createTodo, createProject};
import Project from "./project";
import Todo from "./todo";
import {appendProject, appendTodos} from "./dom"
import TodoList from "./TodoList";

let projectHolder = [];


function createTodo(title, description, currentProject) {

    let todo = new Todo(title, description);
    
    console.log(currentProject);
    
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

// Appened all the todos onto the clicked project
function projectTodos(currentProject) {
    
console.log(currentProject);

let result = projectHolder.filter(x => x.name === currentProject);

for(let i = 0; i < result[0].tasks.length; i++) {
    let todo = (result[0].tasks[i]);
    appendTodos(todo);
    
}

    
}




export {createTodo, createProject, projectTodos};
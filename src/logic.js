import Project from "./project";
import Todo from "./todo";
import {appendProject, appendTodos} from "./dom"
import TodoList from "./TodoList";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

let projectHolder = [];

format(new Date(2022,0,1), 'dd/MM/yyyy');

function createTodo(title, description, duedate, currentProject) {

    let todo = new Todo(title, description, duedate);
    
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

function deleteProject(pname) {
    
    projectHolder = projectHolder.filter(x => x.name !== pname);
    console.log(projectHolder);
}


function deleteTodo(pname, tname) {
    console.log(pname, tname[0]);
    
    for (let i = 0; i< projectHolder.length; i++) {
        if(projectHolder[i].name === pname) {
            for (let j = 0; j< projectHolder[i].tasks.length; j++) {
                if(projectHolder[i].tasks[j].title === tname[0]) {
                   projectHolder[i].tasks.splice(j, 1);
                    
                }

            }
        }

    }
}



export {createTodo, createProject, projectTodos, deleteProject, deleteTodo};
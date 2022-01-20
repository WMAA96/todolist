import Project from "./project";
import Todo from "./todo";
import {appendProject, appendTodos} from "./dom"
import TodoList from "./TodoList";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

let projectHolder = [];

format(new Date(2022,0,1), 'dd/MM/yyyy');

function createTodo(title, description, duedate, currentProject, toAppend) {

    let todo = new Todo(title, description, duedate);
    
    
    
    let result = projectHolder.filter(x => x.name === currentProject);
     
    
    result[0].addTask(todo);
    
    console.log(currentProject);
    
    saveProject();

    if(toAppend === undefined) {
        appendTodos(todo);
    }
    


}

function createProject(pname) {

    let project = new Project(pname);
    projectHolder.push(project);
    


    saveProject(project);

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
    saveProject();
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

function saveProject() {

    
    localStorage.setItem("Project", JSON.stringify(projectHolder));

}



function loadProject() {

    if(JSON.parse(localStorage.getItem("Project")) != null) {
        let storedProjects = JSON.parse(localStorage.getItem("Project"));

        console.log(storedProjects)

        storedProjects.forEach(project =>  createProject(project._name));

        for (let i = 0; i< storedProjects.length; i++){
           if(storedProjects[i].tasks.length > 0) {
               for (let j = 0; j< storedProjects[i].tasks.length; j++) {
                   
                   createTodo(storedProjects[i].tasks[j].title, storedProjects[i].tasks[j].description, storedProjects[i].tasks[j]._duedate, storedProjects[i]._name, "No");
               }
           }
        }

        
    }
    

}



export {createTodo, createProject, projectTodos, deleteProject, deleteTodo, loadProject};
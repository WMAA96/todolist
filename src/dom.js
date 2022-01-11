
import { createTodo, createProject, projectTodos, deleteProject, deleteTodo } from "./logic";


function setup() {

    // Add a cancel button later
    const newTodo = document.getElementById("newTodo");
    const form = document.getElementById("addForm");
    const newProject = document.getElementById("newProject")
    const projectForm = document.getElementById("addProject");

    // setup TodoList / Projects holder

    
    
    

    // setup Projects

    newProject.addEventListener("click", () => {
        projectForm.style.display = "block";
    });

    projectSubmit.addEventListener("click", () => {
        createProject(projectName.value);
        projectForm.style.display = "none";
        projectName.value = "";

    });

    //setup Todos

    newTodo.addEventListener("click", () => {
        form.style.display = "block";
    });

    submit.addEventListener("click", () => {
        let title = document.getElementById("title");
        let description = document.getElementById("description");
        let duedate = document.getElementById("duedate");
        let currentProject = document.getElementById("currentProject");

        form.style.display = "none";
        
        

        createTodo(title.value, description.value, duedate.value, currentProject.textContent);
        title.value = description.value = "";
        

    });  
    
}


const appendProject = (project) => {
    let li = document.createElement("li");
    let removeProject = document.createElement("button")

    removeProject.append("X");

    li.addEventListener("click", projectClick);


    removeProject.addEventListener("click", (e) => {
        deleteProject(li.textContent.substring(0, li.textContent.length - 1));
        li.removeEventListener("click", projectClick);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        
    })

    li.append(project.name);
    li.appendChild(removeProject);

    document.getElementById("projectList").appendChild(li);
}


// When user clicks on a project, changes the current project.

function projectClick(e) {
    let currentProject = document.getElementById("currentProject");
    currentProject.textContent = e.target.textContent.substring(0, e.target.textContent.length - 1);

    let element = document.getElementById("todoHolder");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    projectTodos(currentProject.textContent);
    
    
    
}


const appendTodos = (todo) => {
    let li = document.createElement("li");
    let removeTodo = document.createElement("button")
    let pname = document.getElementById("currentProject");

    removeTodo.append("X");

    removeTodo.addEventListener("click", (e) => {
        deleteTodo(pname.textContent, li.textContent.substring(0, li.textContent.length - 1));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })

    li.append(todo.title);
    li.appendChild(removeTodo);

    document.getElementById("todoHolder").appendChild(li);

    



}

createProject("TEST")
createProject("TESTING2")

export {setup, appendProject, appendTodos};

import { createTodo, createProject } from "./logic";


function setup() {

    // Add a cancel button later
    const newTodo = document.getElementById("newTodo");
    const form = document.getElementById("addForm");
    const newProject = document.getElementById("newProject")
    const projectForm = document.getElementById("addProject");

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
        form.style.display = "none";
        

        createTodo(title.value, description.value);
        title.value = description.value = "";

    });  
    
}



const appendProject = (project) => {
    let li = document.createElement("li");
    let removeProject = document.createElement("button")

    removeProject.append("X");

    li.addEventListener("click", projectClick);


    removeProject.addEventListener("click", (e) => {
        li.removeEventListener("click", projectClick);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })

    li.append(project.name);
    li.appendChild(removeProject);

    document.getElementById("projectList").appendChild(li);
}




function projectClick(e) {
    let currentProject = document.getElementById("currentProject");
    currentProject.textContent = e.target.textContent.substring(0, e.target.textContent.length - 1);
    
}

export {setup, appendProject};
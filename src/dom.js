
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




export {setup};
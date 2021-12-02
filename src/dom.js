import Todo from "./todo";
import { createTodo } from "./logic";


function setup() {
    const createTodo = document.getElementById("newTodo");
    const form = document.getElementById("addForm");

    createTodo.addEventListener("click", showForm);

    submit.addEventListener("click", submitTodo);  
}


function submitTodo() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    createTodo(title, description);
    
    
}

function showForm() {
    const form = document.getElementById("addForm");
    form.style.display = "block";

}


export {setup};
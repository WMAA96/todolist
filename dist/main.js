/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });


class TodoList {
    constructor() {
        this.projects = [];
    }
    push(something) {
        this.projects.push(something);
    }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setup": () => (/* binding */ setup),
/* harmony export */   "appendProject": () => (/* binding */ appendProject),
/* harmony export */   "appendTodos": () => (/* binding */ appendTodos)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");




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
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName.value);
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
        let currentProject = document.getElementById("currentProject");

        form.style.display = "none";
        
        

        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title.value, description.value, currentProject.textContent);
        title.value = description.value = "";
        

    });  
    
}


const appendProject = (project) => {
    let li = document.createElement("li");
    let removeProject = document.createElement("button")

    removeProject.append("X");

    li.addEventListener("click", projectClick);


    removeProject.addEventListener("click", (e) => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(li.textContent.substring(0, li.textContent.length - 1));
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
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.projectTodos)(currentProject.textContent);
    
    
    
}


const appendTodos = (todo) => {
    let li = document.createElement("li");
    let removeTodo = document.createElement("button")
    let pname = document.getElementById("currentProject");

    removeTodo.append("X");

    removeTodo.addEventListener("click", (e) => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(pname.textContent, li.textContent.substring(0, li.textContent.length - 1));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })

    li.append(todo.title);
    li.appendChild(removeTodo);

    document.getElementById("todoHolder").appendChild(li);

    



}

;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)("TEST")
;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)("TESTING2")



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectTodos": () => (/* binding */ projectTodos),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList */ "./src/TodoList.js");





let projectHolder = [];


function createTodo(title, description, currentProject) {

    let todo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](title, description);
    
    console.log(currentProject);
    
    let result = projectHolder.filter(x => x.name === currentProject);
     
    
    result[0].addTask(todo);
    console.log(projectHolder);
    

    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.appendTodos)(todo);


}

function createProject(pname) {

    let project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](pname);
    projectHolder.push(project);
    console.log(projectHolder);

    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.appendProject)(project);
    

    
}

// Appened all the todos onto the clicked project
function projectTodos(currentProject) {
    
console.log(currentProject);

let result = projectHolder.filter(x => x.name === currentProject);

for(let i = 0; i < result[0].tasks.length; i++) {
    let todo = (result[0].tasks[i]);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.appendTodos)(todo);  
}
    
}

function deleteProject(pname) {
    
    projectHolder = projectHolder.filter(x => x.name !== pname);
    console.log(projectHolder);
}


function deleteTodo(pname, tname) {
    
    for (let i = 0; i< projectHolder.length; i++) {
        if(projectHolder[i].name === pname) {
            for (let j = 0; j< projectHolder[i].tasks.length; j++) {
                if(projectHolder[i].tasks[j].title === tname) {
                   projectHolder[i].tasks.splice(j, 1);
                    
                }

            }
        }

    }
}





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });


class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        
    }


    get name() {
        
        return this._name;
    }

    set name(value) {
        if (value.length < 1) {
            alert("Name is too short")
            return;
        }
        this._name = value;
    }

    addTask(newTask) {
        this.tasks.push(newTask);
    }

}






/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;

        // add duedate + priority + notes later.


    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");






(0,_dom__WEBPACK_IMPORTED_MODULE_2__.setup)();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjZGOzs7QUFHN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrREFBVTtBQUNsQjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUEsc0RBQWE7QUFDYixzREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhtQjtBQUNOO0FBQ3NCO0FBQ2Q7O0FBRWxDOzs7QUFHQTs7QUFFQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQVc7OztBQUdmOztBQUVBOztBQUVBLHNCQUFzQixnREFBTztBQUM3QjtBQUNBOztBQUVBLElBQUksbURBQWE7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBLElBQUksaURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7Ozs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ007QUFDSDs7OztBQUk3QiwyQ0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuICAgIHB1c2goc29tZXRoaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChzb21ldGhpbmcpO1xuICAgIH1cbn0iLCJcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGNyZWF0ZVByb2plY3QsIHByb2plY3RUb2RvcywgZGVsZXRlUHJvamVjdCwgZGVsZXRlVG9kbyB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cblxuZnVuY3Rpb24gc2V0dXAoKSB7XG5cbiAgICAvLyBBZGQgYSBjYW5jZWwgYnV0dG9uIGxhdGVyXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VG9kb1wiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb3JtXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIilcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcblxuICAgIC8vIHNldHVwIFRvZG9MaXN0IC8gUHJvamVjdHMgaG9sZGVyXG5cbiAgICBcbiAgICBcbiAgICBcblxuICAgIC8vIHNldHVwIFByb2plY3RzXG5cbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcblxuICAgIH0pO1xuXG4gICAgLy9zZXR1cCBUb2Rvc1xuXG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50UHJvamVjdFwiKTtcblxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGNyZWF0ZVRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBjdXJyZW50UHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBcblxuICAgIH0pOyAgXG4gICAgXG59XG5cblxuY29uc3QgYXBwZW5kUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXG4gICAgcmVtb3ZlUHJvamVjdC5hcHBlbmQoXCJYXCIpO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDbGljayk7XG5cblxuICAgIHJlbW92ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QobGkudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIGxpLnRleHRDb250ZW50Lmxlbmd0aCAtIDEpKTtcbiAgICAgICAgbGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDbGljayk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgXG4gICAgfSlcblxuICAgIGxpLmFwcGVuZChwcm9qZWN0Lm5hbWUpO1xuICAgIGxpLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3QpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG59XG5cblxuLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiBhIHByb2plY3QsIGNoYW5nZXMgdGhlIGN1cnJlbnQgcHJvamVjdC5cblxuZnVuY3Rpb24gcHJvamVjdENsaWNrKGUpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRQcm9qZWN0XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIGUudGFyZ2V0LnRleHRDb250ZW50Lmxlbmd0aCAtIDEpO1xuXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Ib2xkZXJcIik7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgXG4gICAgXG4gICAgXG59XG5cblxuY29uc3QgYXBwZW5kVG9kb3MgPSAodG9kbykgPT4ge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgcmVtb3ZlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBsZXQgcG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRQcm9qZWN0XCIpO1xuXG4gICAgcmVtb3ZlVG9kby5hcHBlbmQoXCJYXCIpO1xuXG4gICAgcmVtb3ZlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZGVsZXRlVG9kbyhwbmFtZS50ZXh0Q29udGVudCwgbGkudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIGxpLnRleHRDb250ZW50Lmxlbmd0aCAtIDEpKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgIH0pXG5cbiAgICBsaS5hcHBlbmQodG9kby50aXRsZSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQocmVtb3ZlVG9kbyk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Ib2xkZXJcIikuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgXG5cblxuXG59XG5cbmNyZWF0ZVByb2plY3QoXCJURVNUXCIpXG5jcmVhdGVQcm9qZWN0KFwiVEVTVElORzJcIilcblxuZXhwb3J0IHtzZXR1cCwgYXBwZW5kUHJvamVjdCwgYXBwZW5kVG9kb3N9OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7YXBwZW5kUHJvamVjdCwgYXBwZW5kVG9kb3N9IGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3RcIjtcblxubGV0IHByb2plY3RIb2xkZXIgPSBbXTtcblxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgY3VycmVudFByb2plY3QpIHtcblxuICAgIGxldCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IHByb2plY3RIb2xkZXIuZmlsdGVyKHggPT4geC5uYW1lID09PSBjdXJyZW50UHJvamVjdCk7XG4gICAgIFxuICAgIFxuICAgIHJlc3VsdFswXS5hZGRUYXNrKHRvZG8pO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RIb2xkZXIpO1xuICAgIFxuXG4gICAgYXBwZW5kVG9kb3ModG9kbyk7XG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHBuYW1lKSB7XG5cbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHBuYW1lKTtcbiAgICBwcm9qZWN0SG9sZGVyLnB1c2gocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEhvbGRlcik7XG5cbiAgICBhcHBlbmRQcm9qZWN0KHByb2plY3QpO1xuICAgIFxuXG4gICAgXG59XG5cbi8vIEFwcGVuZWQgYWxsIHRoZSB0b2RvcyBvbnRvIHRoZSBjbGlja2VkIHByb2plY3RcbmZ1bmN0aW9uIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdCkge1xuICAgIFxuY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG5sZXQgcmVzdWx0ID0gcHJvamVjdEhvbGRlci5maWx0ZXIoeCA9PiB4Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KTtcblxuZm9yKGxldCBpID0gMDsgaSA8IHJlc3VsdFswXS50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvID0gKHJlc3VsdFswXS50YXNrc1tpXSk7XG4gICAgYXBwZW5kVG9kb3ModG9kbyk7ICBcbn1cbiAgICBcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwbmFtZSkge1xuICAgIFxuICAgIHByb2plY3RIb2xkZXIgPSBwcm9qZWN0SG9sZGVyLmZpbHRlcih4ID0+IHgubmFtZSAhPT0gcG5hbWUpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RIb2xkZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8ocG5hbWUsIHRuYW1lKSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8IHByb2plY3RIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdEhvbGRlcltpXS5uYW1lID09PSBwbmFtZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8IHByb2plY3RIb2xkZXJbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0SG9sZGVyW2ldLnRhc2tzW2pdLnRpdGxlID09PSB0bmFtZSkge1xuICAgICAgICAgICAgICAgICAgIHByb2plY3RIb2xkZXJbaV0udGFza3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtjcmVhdGVUb2RvLCBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0VG9kb3MsIGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRvZG99OyIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBhbGVydChcIk5hbWUgaXMgdG9vIHNob3J0XCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG59XG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxuICAgICAgICAvLyBhZGQgZHVlZGF0ZSArIHByaW9yaXR5ICsgbm90ZXMgbGF0ZXIuXG5cblxuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBzZXR1cCB9IGZyb20gXCIuL2RvbVwiXG5cblxuXG5zZXR1cCgpO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
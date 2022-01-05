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

    removeTodo.append("X");

    removeTodo.addEventListener("click", (e) => {
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
/* harmony export */   "projectTodos": () => (/* binding */ projectTodos)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmtFOzs7QUFHbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrREFBVTtBQUNsQjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBLHNEQUFhO0FBQ2Isc0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSG1CO0FBQ047QUFDc0I7QUFDZDs7QUFFbEM7OztBQUdBOztBQUVBLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpREFBVzs7O0FBR2Y7O0FBRUE7O0FBRUEsc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7O0FBRUEsSUFBSSxtREFBYTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0EsSUFBSSxpREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNNO0FBQ0g7Ozs7QUFJN0IsMkNBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cbiAgICBwdXNoKHNvbWV0aGluZykge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goc29tZXRoaW5nKTtcbiAgICB9XG59IiwiXG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0VG9kb3MgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5cbmZ1bmN0aW9uIHNldHVwKCkge1xuXG4gICAgLy8gQWRkIGEgY2FuY2VsIGJ1dHRvbiBsYXRlclxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1RvZG9cIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9ybVwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0XCIpXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5cbiAgICAvLyBzZXR1cCBUb2RvTGlzdCAvIFByb2plY3RzIGhvbGRlclxuXG4gICAgXG4gICAgXG4gICAgXG5cbiAgICAvLyBzZXR1cCBQcm9qZWN0c1xuXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG5cbiAgICB9KTtcblxuICAgIC8vc2V0dXAgVG9kb3NcblxuICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFByb2plY3RcIik7XG5cbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBjcmVhdGVUb2RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgY3VycmVudFByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgXG5cbiAgICB9KTsgIFxuICAgIFxufVxuXG5cbmNvbnN0IGFwcGVuZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgcmVtb3ZlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICAgIHJlbW92ZVByb2plY3QuYXBwZW5kKFwiWFwiKTtcblxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q2xpY2spO1xuXG5cbiAgICByZW1vdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsaS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENsaWNrKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgIH0pXG5cbiAgICBsaS5hcHBlbmQocHJvamVjdC5uYW1lKTtcbiAgICBsaS5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xufVxuXG5cbi8vIFdoZW4gdXNlciBjbGlja3Mgb24gYSBwcm9qZWN0LCBjaGFuZ2VzIHRoZSBjdXJyZW50IHByb2plY3QuXG5cbmZ1bmN0aW9uIHByb2plY3RDbGljayhlKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50UHJvamVjdFwiKTtcbiAgICBjdXJyZW50UHJvamVjdC50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50LnN1YnN0cmluZygwLCBlLnRhcmdldC50ZXh0Q29udGVudC5sZW5ndGggLSAxKTtcblxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvSG9sZGVyXCIpO1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBwcm9qZWN0VG9kb3MoY3VycmVudFByb2plY3QudGV4dENvbnRlbnQpO1xuICAgIFxuICAgIFxuICAgIFxufVxuXG5cbmNvbnN0IGFwcGVuZFRvZG9zID0gKHRvZG8pID0+IHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHJlbW92ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5cbiAgICByZW1vdmVUb2RvLmFwcGVuZChcIlhcIik7XG5cbiAgICByZW1vdmVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgfSlcblxuICAgIGxpLmFwcGVuZCh0b2RvLnRpdGxlKTtcbiAgICBsaS5hcHBlbmRDaGlsZChyZW1vdmVUb2RvKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0hvbGRlclwiKS5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICBcblxuXG5cbn1cblxuY3JlYXRlUHJvamVjdChcIlRFU1RcIilcbmNyZWF0ZVByb2plY3QoXCJURVNUSU5HMlwiKVxuXG5leHBvcnQge3NldHVwLCBhcHBlbmRQcm9qZWN0LCBhcHBlbmRUb2Rvc307IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHthcHBlbmRQcm9qZWN0LCBhcHBlbmRUb2Rvc30gZnJvbSBcIi4vZG9tXCJcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9Ub2RvTGlzdFwiO1xuXG5sZXQgcHJvamVjdEhvbGRlciA9IFtdO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBjdXJyZW50UHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gcHJvamVjdEhvbGRlci5maWx0ZXIoeCA9PiB4Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgXG4gICAgXG4gICAgcmVzdWx0WzBdLmFkZFRhc2sodG9kbyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEhvbGRlcik7XG4gICAgXG5cbiAgICBhcHBlbmRUb2Rvcyh0b2RvKTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocG5hbWUpIHtcblxuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocG5hbWUpO1xuICAgIHByb2plY3RIb2xkZXIucHVzaChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SG9sZGVyKTtcblxuICAgIGFwcGVuZFByb2plY3QocHJvamVjdCk7XG4gICAgXG5cbiAgICBcbn1cblxuLy8gQXBwZW5lZCBhbGwgdGhlIHRvZG9zIG9udG8gdGhlIGNsaWNrZWQgcHJvamVjdFxuZnVuY3Rpb24gcHJvamVjdFRvZG9zKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgXG5jb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cbmxldCByZXN1bHQgPSBwcm9qZWN0SG9sZGVyLmZpbHRlcih4ID0+IHgubmFtZSA9PT0gY3VycmVudFByb2plY3QpO1xuXG5mb3IobGV0IGkgPSAwOyBpIDwgcmVzdWx0WzBdLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG8gPSAocmVzdWx0WzBdLnRhc2tzW2ldKTtcbiAgICBhcHBlbmRUb2Rvcyh0b2RvKTtcbiAgICBcbn1cblxuICAgIFxufVxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRvZG8sIGNyZWF0ZVByb2plY3QsIHByb2plY3RUb2Rvc307IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTmFtZSBpcyB0b28gc2hvcnRcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG5cbn1cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIC8vIGFkZCBkdWVkYXRlICsgcHJpb3JpdHkgKyBub3RlcyBsYXRlci5cblxuXG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHNldHVwIH0gZnJvbSBcIi4vZG9tXCJcblxuXG5cbnNldHVwKCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
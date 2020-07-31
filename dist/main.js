/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/changeProjectDisplay.js":
/*!*************************************!*\
  !*** ./src/changeProjectDisplay.js ***!
  \*************************************/
/*! exports provided: changeProjectDisplay, viewAllProjects, projectName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeProjectDisplay\", function() { return changeProjectDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewAllProjects\", function() { return viewAllProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectName\", function() { return projectName; });\nlet projectName = \"default\"\r\nconst changeProjectDisplay = () => {\r\n    const projectButtons = document.querySelectorAll(\"#projects button\")\r\n    const projectDivs = document.querySelectorAll(\"#todos>div\")\r\n    for (let button of projectButtons) {\r\n        button.addEventListener(\"click\", () => {\r\n            for (let div of projectDivs) {\r\n                const buttonName = ((button.innerHTML.split(\" \")[0].toLowerCase()))\r\n                if (div.id !== buttonName)\r\n                    div.style.display = \"none\"\r\n                else {\r\n                    projectName = buttonName\r\n                    div.style.display = \"block\"\r\n                }\r\n            }\r\n        }\r\n        )\r\n    }\r\n}\r\nconst viewAllProjects = () => {\r\n    const viewAll = document.querySelector(\"#viewAll\")\r\n    const projectDivs = document.querySelectorAll(\"#todos>div\")\r\n    viewAll.addEventListener(\"click\", () => {\r\n        for (let div of projectDivs)\r\n            div.style.display = \"block\"\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/changeProjectDisplay.js?");

/***/ }),

/***/ "./src/createDefultProject.js":
/*!************************************!*\
  !*** ./src/createDefultProject.js ***!
  \************************************/
/*! exports provided: createDefaultProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDefaultProject\", function() { return createDefaultProject; });\n/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ \"./src/createTodo.js\");\n\r\n\r\nconst createDefaultProject = () => {\r\n    const electricBill = new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](\"Pay the electic bill\", \"\", \"05/08/2020\", \"High\")\r\n    const airport = new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](\"Take Samantha to airport\", \"1729,First ave,New York,New york\",\r\n        \"27/07/2020\", \"Very High\")\r\n    const dinner = new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](\"Dinner with Sarah\", \"Upland,345 Park,Ave S.\", \"31/07/2020\", \"High\")\r\n    Object(_createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodoDiv\"])(airport)\r\n    Object(_createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodoDiv\"])(dinner)\r\n    Object(_createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodoDiv\"])(electricBill)\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/createDefultProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/*! exports provided: Todo, createTodoDiv, projectName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodoDiv\", function() { return createTodoDiv; });\n/* harmony import */ var _changeProjectDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeProjectDisplay */ \"./src/changeProjectDisplay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"projectName\", function() { return _changeProjectDisplay__WEBPACK_IMPORTED_MODULE_0__[\"projectName\"]; });\n\n\r\nclass Todo {\r\n    constructor(title, description, lastDate, priority) {\r\n        this.title = title\r\n        this.description = description\r\n        this.lastDate = lastDate\r\n        this.priority = priority\r\n    }\r\n}\r\nconst createTodoDiv = (todoObject) => {\r\n    const todos = document.querySelector(\"#todos\")\r\n    const div = document.createElement(\"div\")\r\n    const projectDiv = document.getElementById(_changeProjectDisplay__WEBPACK_IMPORTED_MODULE_0__[\"projectName\"])\r\n    const title = document.createElement(\"h1\")\r\n    const delIcon = document.createElement(\"img\")\r\n    delIcon.src = \"./Images/delete.png\"\r\n    delIcon.addEventListener(\"click\", () => {\r\n        div.remove()\r\n    })\r\n    title.innerHTML = todoObject.title\r\n    const description = document.createElement(\"p\")\r\n    description.innerHTML = todoObject.description\r\n    description.style.display = \"none\"\r\n    const lastDate = document.createElement(\"p\")\r\n    lastDate.innerHTML = todoObject.lastDate\r\n    const priority = document.createElement(\"p\")\r\n    priority.innerHTML = todoObject.priority\r\n    div.appendChild(title)\r\n    div.appendChild(description)\r\n    div.appendChild(lastDate)\r\n    div.appendChild(priority)\r\n    div.appendChild(delIcon)\r\n    div.classList.add(\"todo\")\r\n    projectDiv.appendChild(div)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/createTodo.js?");

/***/ }),

/***/ "./src/eventsforProject.js":
/*!*********************************!*\
  !*** ./src/eventsforProject.js ***!
  \*********************************/
/*! exports provided: changeProjectFormDisplay, createNewProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeProjectFormDisplay\", function() { return changeProjectFormDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewProject\", function() { return createNewProject; });\n/* harmony import */ var _changeProjectDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeProjectDisplay.js */ \"./src/changeProjectDisplay.js\");\n\r\nconst changeProjectFormDisplay = () => {\r\n    const newProjectButton = document.querySelector(\"#newProject\")\r\n    const projectName = document.querySelector(\"#projectName\")\r\n    newProjectButton.addEventListener(\"click\", () => {\r\n        if (projectName.style.display === \"none\")\r\n            projectName.style.display = \"block\"\r\n        else\r\n            projectName.style.display = \"none\"\r\n    })\r\n\r\n}\r\nconst createNewProject = () => {\r\n    const projectName = document.querySelector(\"#projectName\")\r\n    const todosDiv = document.querySelector(\"#todos\")\r\n    const input = projectName.querySelector(\"input\")\r\n    const submitButton = projectName.querySelector(\"button\")\r\n    submitButton.addEventListener(\"click\", () => {\r\n        if (input.value) {\r\n            const projects = document.querySelector(\"#projects\")\r\n            const projectDiv = document.createElement(\"div\")\r\n            const projectButton = document.createElement(\"button\")\r\n            projectButton.innerHTML = input.value\r\n            projectButton.id = `${input.value}Button`\r\n            projectDiv.id = input.value\r\n            todosDiv.appendChild(projectDiv)\r\n            projectName.style.display = \"none\"\r\n            projects.appendChild(projectButton)\r\n            Object(_changeProjectDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"changeProjectDisplay\"])()\r\n            Object(_changeProjectDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"viewAllProjects\"])()\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/eventsforProject.js?");

/***/ }),

/***/ "./src/eventsforTodo.js":
/*!******************************!*\
  !*** ./src/eventsforTodo.js ***!
  \******************************/
/*! exports provided: changeDescriptionDisplay, changeFormDisplay, submitButtonEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDescriptionDisplay\", function() { return changeDescriptionDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeFormDisplay\", function() { return changeFormDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitButtonEvent\", function() { return submitButtonEvent; });\n/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ \"./src/createTodo.js\");\n/* harmony import */ var _readFormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readFormData.js */ \"./src/readFormData.js\");\n\r\n\r\nconst changeDescriptionDisplay = () => {\r\n    const todos = document.querySelectorAll(\".todo\")\r\n\r\n    for (const todo of todos) {\r\n        todo.addEventListener(\"click\", () => {\r\n            const description = todo.querySelector(\"p\") //select first p element\r\n            const display = description.style.display\r\n            if (display === \"none\")\r\n                description.style.display = \"block\"\r\n            else\r\n                description.style.display = \"none\"\r\n\r\n        })\r\n    }\r\n}\r\nconst changeFormDisplay = () => {\r\n    const taskButton = document.querySelector(\"#newTask\")\r\n    const form = document.querySelector(\"form\")\r\n    taskButton.addEventListener(\"click\", () => {\r\n        if (form.style.display === \"none\")\r\n            form.style.display = \"block\"\r\n        else\r\n            form.style.display = \"none\"\r\n    })\r\n}\r\nconst submitButtonEvent = () => {\r\n    const submitButton = document.querySelector(\"#submit\")\r\n    const form = document.querySelector(\"form\")\r\n    submitButton.addEventListener(\"click\", () => {\r\n        const todoObject = Object(_readFormData_js__WEBPACK_IMPORTED_MODULE_1__[\"readData\"])()\r\n        let emptInputs = 0\r\n        for (const value of Object.values(todoObject))\r\n            if (!value) {\r\n                emptInputs++\r\n            }\r\n        if (emptInputs) {\r\n            const inputs = document.querySelectorAll(\"input\")\r\n            for (const input of inputs) {\r\n                input.required = true\r\n            }\r\n        }\r\n        else {\r\n            Object(_createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodoDiv\"])(todoObject)\r\n            changeDescriptionDisplay()\r\n            form.style.display = \"none\"\r\n        }\r\n\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/eventsforTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createDefultProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDefultProject.js */ \"./src/createDefultProject.js\");\n/* harmony import */ var _eventsforTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventsforTodo.js */ \"./src/eventsforTodo.js\");\n/* harmony import */ var _eventsforProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsforProject.js */ \"./src/eventsforProject.js\");\n/* harmony import */ var _changeProjectDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeProjectDisplay.js */ \"./src/changeProjectDisplay.js\");\n/* harmony import */ var _settingdateAsToday_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settingdateAsToday.js */ \"./src/settingdateAsToday.js\");\n\r\n\r\n\r\n\r\n\r\nObject(_createDefultProject_js__WEBPACK_IMPORTED_MODULE_0__[\"createDefaultProject\"])()\r\nObject(_eventsforTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"changeDescriptionDisplay\"])()\r\nObject(_eventsforTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"changeFormDisplay\"])()\r\nObject(_eventsforTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"submitButtonEvent\"])()\r\nObject(_eventsforProject_js__WEBPACK_IMPORTED_MODULE_2__[\"changeProjectFormDisplay\"])()\r\nObject(_eventsforProject_js__WEBPACK_IMPORTED_MODULE_2__[\"createNewProject\"])()\r\nconst def = document.querySelector(\"#defaultButton\")\r\nObject(_changeProjectDisplay_js__WEBPACK_IMPORTED_MODULE_3__[\"changeProjectDisplay\"])(def)\r\nObject(_settingdateAsToday_js__WEBPACK_IMPORTED_MODULE_4__[\"settingDateAsToday\"])()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/readFormData.js":
/*!*****************************!*\
  !*** ./src/readFormData.js ***!
  \*****************************/
/*! exports provided: readData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readData\", function() { return readData; });\n/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ \"./src/createTodo.js\");\n\r\nconst readData = () => {\r\n    const formElements = document.querySelector(\"form\").elements\r\n    const todoObject = new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"]()\r\n    for (const formElement of formElements) {\r\n        if (formElement.name)\r\n            todoObject[formElement.name] = formElement.value\r\n    }\r\n\r\n    return todoObject\r\n}\r\n\n\n//# sourceURL=webpack:///./src/readFormData.js?");

/***/ }),

/***/ "./src/settingdateAsToday.js":
/*!***********************************!*\
  !*** ./src/settingdateAsToday.js ***!
  \***********************************/
/*! exports provided: settingDateAsToday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settingDateAsToday\", function() { return settingDateAsToday; });\n\r\nconst settingDateAsToday = () => {\r\n    var field = document.querySelector(\"#date\");\r\n    var date = new Date();\r\n\r\n    // Set the date\r\n    field.value = date.getFullYear().toString() + '-' +\r\n        (date.getMonth() + 1).toString().padStart(2, 0) + '-' +\r\n        date.getDate().toString().padStart(2, 0);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/settingdateAsToday.js?");

/***/ })

/******/ });
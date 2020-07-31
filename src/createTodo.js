import { projectName } from "./changeProjectDisplay"
class Todo {
    constructor(title, description, lastDate, priority) {
        this.title = title
        this.description = description
        this.lastDate = lastDate
        this.priority = priority
    }
}
const createTodoDiv = (todoObject) => {
    const todos = document.querySelector("#todos")
    const div = document.createElement("div")
    const projectDiv = document.getElementById(projectName)
    const title = document.createElement("h1")
    const delIcon = document.createElement("img")
    delIcon.src = "./Images/delete.png"
    delIcon.addEventListener("click", () => {
        div.remove()
    })
    title.innerHTML = todoObject.title
    const description = document.createElement("p")
    description.innerHTML = todoObject.description
    description.style.display = "none"
    const lastDate = document.createElement("p")
    lastDate.innerHTML = todoObject.lastDate
    const priority = document.createElement("p")
    priority.innerHTML = todoObject.priority
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(lastDate)
    div.appendChild(priority)
    div.appendChild(delIcon)
    div.classList.add("todo")
    projectDiv.appendChild(div)
}

export { Todo, createTodoDiv, projectName }
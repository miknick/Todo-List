import { Todo, createTodoDiv } from "./createTodo.js"
import { readData } from "./readFormData.js"
const changeDescriptionDisplay = () => {
    const todos = document.querySelectorAll(".todo")

    for (const todo of todos) {
        todo.addEventListener("click", () => {
            const description = todo.querySelector("p") //select first p element
            const display = description.style.display
            if (display === "none")
                description.style.display = "block"
            else
                description.style.display = "none"

        })
    }
}
const changeFormDisplay = () => {
    const taskButton = document.querySelector("#newTask")
    const form = document.querySelector("form")
    taskButton.addEventListener("click", () => {
        if (form.style.display === "none")
            form.style.display = "block"
        else
            form.style.display = "none"
    })
}
const submitButtonEvent = () => {
    const submitButton = document.querySelector("#submit")
    const form = document.querySelector("form")
    submitButton.addEventListener("click", () => {
        const todoObject = readData()
        let emptInputs = 0
        for (const value of Object.values(todoObject))
            if (!value) {
                emptInputs++
            }
        if (emptInputs) {
            const inputs = document.querySelectorAll("input")
            for (const input of inputs) {
                input.required = true
            }
        }
        else {
            createTodoDiv(todoObject)
            changeDescriptionDisplay()
            form.style.display = "none"
        }

    })
}

export {
    changeDescriptionDisplay, changeFormDisplay,
    submitButtonEvent
}
import { Todo } from "./createTodo.js"
const readData = () => {
    const formElements = document.querySelector("form").elements
    const todoObject = new Todo()
    for (const formElement of formElements) {
        if (formElement.name)
            todoObject[formElement.name] = formElement.value
    }

    return todoObject
}
export { readData }
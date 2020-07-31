import { changeProjectDisplay, viewAllProjects } from "./changeProjectDisplay.js"
const changeProjectFormDisplay = () => {
    const newProjectButton = document.querySelector("#newProject")
    const projectName = document.querySelector("#projectName")
    newProjectButton.addEventListener("click", () => {
        if (projectName.style.display === "none")
            projectName.style.display = "block"
        else
            projectName.style.display = "none"
    })

}
const createNewProject = () => {
    const projectName = document.querySelector("#projectName")
    const todosDiv = document.querySelector("#todos")
    const input = projectName.querySelector("input")
    const submitButton = projectName.querySelector("button")
    submitButton.addEventListener("click", () => {
        if (input.value) {
            const projects = document.querySelector("#projects")
            const projectDiv = document.createElement("div")
            const projectButton = document.createElement("button")
            projectButton.innerHTML = input.value
            projectButton.id = `${input.value}Button`
            projectDiv.id = input.value
            todosDiv.appendChild(projectDiv)
            projectName.style.display = "none"
            projects.appendChild(projectButton)
            changeProjectDisplay()
            viewAllProjects()
        }
    })
}
export {
    changeProjectFormDisplay,
    createNewProject
}
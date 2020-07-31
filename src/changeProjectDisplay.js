let projectName = "default"
const changeProjectDisplay = () => {
    const projectButtons = document.querySelectorAll("#projects button")
    const projectDivs = document.querySelectorAll("#todos>div")
    for (let button of projectButtons) {
        button.addEventListener("click", () => {
            for (let div of projectDivs) {
                const buttonName = ((button.innerHTML.split(" ")[0].toLowerCase()))
                if (div.id !== buttonName)
                    div.style.display = "none"
                else {
                    projectName = buttonName
                    div.style.display = "block"
                }
            }
        }
        )
    }
}
const viewAllProjects = () => {
    const viewAll = document.querySelector("#viewAll")
    const projectDivs = document.querySelectorAll("#todos>div")
    viewAll.addEventListener("click", () => {
        for (let div of projectDivs)
            div.style.display = "block"
    })
}

export { changeProjectDisplay, viewAllProjects, projectName }
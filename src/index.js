import { createDefaultProject } from "./createDefultProject.js"
import { changeDescriptionDisplay, changeFormDisplay, submitButtonEvent, }
    from "./eventsforTodo.js"
import { changeProjectFormDisplay, createNewProject } from "./eventsforProject.js"
import { changeProjectDisplay } from "./changeProjectDisplay.js"
import { settingDateAsToday } from "./settingdateAsToday.js"
createDefaultProject()
changeDescriptionDisplay()
changeFormDisplay()
submitButtonEvent()
changeProjectFormDisplay()
createNewProject()
const def = document.querySelector("#defaultButton")
changeProjectDisplay(def)
settingDateAsToday()
import { Project } from "./project.js";
import { toDo } from "./toDo.js"
import { readData } from "./dataReader.js"
import { format } from "date-fns";

function initializeProjects(){

    // create initial stuff TODO: MAKE IT MAKE A TODO
    let projectList = [new Project("Test Project")];
    let todoobject = new toDo("Welcome!", "Enjoy your To-Do List!", format(new Date(), 'dd/MM/yyyy'), "High", true);
    projectList[0].addToDo(todoobject);

    // Try read from LocalStorage
    // project = readData(project);
    
    return projectList;
}

export { initializeProjects };
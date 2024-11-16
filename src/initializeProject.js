import { Project } from "./project.js";
import { toDo } from "./toDo.js"
import { readData } from "./dataReader.js"
import { format } from "date-fns";

function initializeProjects(){

    // create initial stuff
    project = new Project();
    toDo= new toDo("Welcome!", "Enjoy your To-Do List!", format(newDate(), 'dd/MM/yyyy'), "High", true)
    project.addToDo(toDo);

    // Try read from LocalStorage
    project = readData(project);
    
    return project;
}

export { initializeProjects };
import { Project } from "./project.js";
import { toDo } from "./toDo.js"
import { readData } from "./dataReader.js"
import { format } from "date-fns";

function initializeProjects(){

    // create initial stuff 
    let projectList = [new Project("Test Project")];
    let todoobject = new toDo("Welcome!", "Enjoy your To-Do List!", format(new Date(), 'yyyy-MM-dd'), "High", true);
    projectList[0].addToDo(todoobject);

    //Attempt to read data from localstorage
    projectList = readData(projectList);
    
    return projectList;
}

export { initializeProjects };
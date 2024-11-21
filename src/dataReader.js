import {state} from  "./state.js";

function readData(projectList){
   if(localStorage.getItem("MyProjects")) {
    return JSON.parse(localStorage.getItem("MyProjects"))
   } else return projectList;
}

export { readData };
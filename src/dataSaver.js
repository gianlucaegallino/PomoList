import {state} from "./state.js";

function saveData(){

    const jsonString= JSON.stringify(state.projectList);

    localStorage.setItem("MyProjects", jsonString);
    
}

export {saveData};
// import modules
import { initializeProjects } from "./initializeProject.js"
import { ViewHandler } from "./viewHandler.js"


class state {
    static projectList;
    constructor(){
     state.projectList = initializeProjects();
     ViewHandler.initializeviews();
    }
}

export {state}
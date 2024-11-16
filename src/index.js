//Import .css
import "./normalize.css"
import "./styles.css";

// import modules
import { initializeProjects } from "./initializeProject.js"
import { ViewHandler } from "./viewHandler.js"

let projectList = initializeProjects();
ViewHandler.initializeviews(projectList);
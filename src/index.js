//Import .css
import "./normalize.css"
import "./styles.css";

// import modules
import { initializeProjects } from "./initializeProject.js"
import { viewHandler } from "./viewHandler.js"

let projects = initializeProjects();
viewHandler.initializeviews(projects);
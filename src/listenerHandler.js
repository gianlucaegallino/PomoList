import { ViewHandler } from "./viewHandler.js";
import { exportDataToFile } from "./dataExporter.js";
import { modalHandler } from "./modalHandler.js";
import { saveData } from "./dataSaver";
import { state } from "./state";

class listenerHandler {
  static lastSelectedToDo;

  static addSidebarListeners() {
    //Project Listeners
    const projects = document.querySelectorAll(".project");
    for (const pro of projects) {
      let index = pro.getAttribute("data-ProjectCounter");
      pro.addEventListener("click", () =>
        ViewHandler.drawProject(state.projectList[index])
      );
    }
    //New Project Button Listeners
    const addProjectButton = document.querySelector(".newProject");
    addProjectButton.addEventListener("click", () => {
      modalHandler.showProjectModal();
      //llenar de datos
    });

    //Export Listeners
    const exportBtn = document.querySelector(".projectExport");
    exportBtn.addEventListener("click", () => exportDataToFile(state.projectList));
  }

  static addProjectListeners(project) {
    // New Todo button listener
    const float = document.querySelector(".float");
    float.addEventListener("click", () => {
      modalHandler.showTodoModal();
    });

    //Todo Edit button listener
    const editButtons = document.querySelectorAll(".pencilSvg");
    for (const pencil of editButtons) {
      let index = pencil.getAttribute("data-pencilCounter");
      pencil.addEventListener("click", () => {

        modalHandler.showExpandModal(project.toDoList[index]);
        this.lastSelectedToDo = project.toDoList[index];

      });
    }

    const cbs = document.querySelectorAll("input[type=checkbox]");
    const cards = document.querySelectorAll(".todoCard");

    for (const cb of cbs) {
      let index = cb.getAttribute("data-checkboxcounter");
      
      cb.addEventListener("click", () => {
        project.toDoList[index].status = !cb.checked;
        cards[index].classList.toggle("ghostMode");
        saveData();
      });

    }
  }
}

export { listenerHandler };

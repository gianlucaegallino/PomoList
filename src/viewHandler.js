import pencil from "./edit.svg";

import { listenerHandler } from "./listenerHandler.js";
import { modalHandler } from "./modalHandler.js";
import {state} from  "./state.js";

class ViewHandler {
  static currentlyRenderedProject;

  static initializeviews() {
    this.drawSidebarProjects();
    this.drawProject(state.projectList[0]);
    modalHandler.createTodoModal();
    modalHandler.createExpandModal();
    modalHandler.createProjectModal();
    modalHandler.addModalListeners();
  }

  static drawSidebarProjects() {
    const projectsSection = document.querySelector("#projectsSection");
    projectsSection.innerHTML = "";
    let projectCounter = 0;
    for (let i = 0; i < state.projectList.length; i++) {
      let projectCard = document.createElement("div");
      projectCard.setAttribute("class", "project");
      projectCard.setAttribute("data-ProjectCounter", projectCounter);
      projectCounter++;

      let projectName = document.createElement("p");
      projectName.textContent = state.projectList[i].name;

      projectsSection.appendChild(projectCard);
      projectCard.appendChild(projectName);
    }

    listenerHandler.addSidebarListeners(state.projectList);
  }

  static drawProject(project) {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const mainTitle = document.createElement("h1");
    mainTitle.setAttribute("id", "maintitle");
    mainTitle.textContent = project.name;
    content.appendChild(mainTitle);

    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", "cardContainer");
    content.appendChild(cardContainer);

    const floatingButton = document.createElement("a");
    floatingButton.setAttribute("class", "float");
    floatingButton.textContent = "+";
    content.appendChild(floatingButton);

    let toDoCounter = 0;

    for (let i = 0; i < project.toDoList.length; i++) {
      let todoCard = document.createElement("div");
      todoCard.setAttribute("class", "todoCard");
      todoCard.setAttribute("data-toDoCounter", toDoCounter);

      //Set color border
      switch (project.toDoList[i].priority) {
        case "High":
          todoCard.classList.add("highPriorityBorder");
          break;
        case "Medium":
          todoCard.classList.add("mediumPriorityBorder");
          break;
        case "Low":
          todoCard.classList.add("lowPriorityBorder");
          break;
      }

      let cardSubSection1 = document.createElement("div");
      let cardSubSection2 = document.createElement("div");
      cardSubSection1.setAttribute("class", "cardSubSection");
      cardSubSection2.setAttribute("class", "cardSubSection");
      todoCard.appendChild(cardSubSection1);
      todoCard.appendChild(cardSubSection2);

      let container = document.createElement("label");
      container.setAttribute("class", "container");
      cardSubSection1.appendChild(container);

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-checkboxCounter", toDoCounter);
      if (project.toDoList[i].status == false) {
        checkbox.checked = true;
        todoCard.classList.add("ghostMode");
      }
      container.appendChild(checkbox);

      let checkmark = document.createElement("span");
      checkmark.setAttribute("class", "checkmark");
      container.appendChild(checkmark);

      let todoName = document.createElement("h2");
      todoName.setAttribute("class", "todoName");
      todoName.textContent = project.toDoList[i].title;
      cardSubSection1.appendChild(todoName);

      let dateToDo = document.createElement("p");
      dateToDo.setAttribute("class", "dateToDo");
      dateToDo.textContent = project.toDoList[i].dueDate;
      cardSubSection2.appendChild(dateToDo);

      let pencilSvg = document.createElement("img");
      pencilSvg.setAttribute("src", pencil);
      pencilSvg.setAttribute("alt", "edit");
      pencilSvg.setAttribute("class", "pencilSvg");
      pencilSvg.setAttribute("data-pencilCounter", toDoCounter);
      cardSubSection2.appendChild(pencilSvg);

      toDoCounter++;

      cardContainer.appendChild(todoCard);
    }
    this.currentlyRenderedProject = project;

    listenerHandler.addProjectListeners(project);
  }

}

export { ViewHandler };

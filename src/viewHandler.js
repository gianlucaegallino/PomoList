import pencil from "./edit.svg"

class ViewHandler{

    static drawSidebarProjects(projects) {
        const projectsSection = document.querySelector("#projectsSection");
        projectsSection.innerHTML = ""
        let projectCounter = 0;
        for (const project in projects){

            let projectCard = document.createElement("div");
            projectCard.setAttribute("class", "project");
            projectCard.setAttribute("data-ProjectCounter",  projectCounter);
            projectCounter++;

            let projectName = document.createElement("p");
            projectName.textContent = project.title;

            projectsSection.appendChild(projectCard);
            projectCard.appendChild(projectName);
        }

    }

    static drawProject(project){
        const content = document.querySelector("#content");
        content.innerHTML = "";

        const mainTitle = document.createElement("h1");
        mainTitle.setAttribute("id", "maintitle")
        mainTitle.textContent = project.name;
        content.appendChild(mainTitle);

        const cardContainer = document.createElement("div");
        cardContainer.setAttribute("id", "cardContainer");
        content.appendChild(cardContainer);

        let toDoCounter = 0;
        for (const toDo in project){

            let todoCard = document.createElement("div");
            todoCard.setAttribute("class", "todoCard");
            projectCard.setAttribute("data-toDoCounter",  toDoCounter);
            toDoCounter++;
            cardContainer.appendChild(todoCard);

            let cardSubSection1  = document.createElement("div");
            let cardSubSection2 = document.createElement("div");
            cardSubSection1.setAttribute("class", "cardSubSection");
            cardSubSection2.setAttribute("class", "cardSubSection");
            todoCard.appendChild(cardSubSection1);
            todoCard.appendChild(cardSubSection2);

            let container = document.createElement("label");
            containter.setAttribute("class", "container")
            cardSubSection1.appendChild(container);

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            container.appendChild(checkbox);

            let checkmark = document.createElement("span");
            checkmark.setAttribute("class", "checkmark");
            container.appendChild(checkmark);

            let todoName = document.createElement("h2");
            todoName.setAttribute("class", "todoName");
            todoName.textContent = toDo.name;
            cardSubSection1.appendChild(todoName);

            let dateToDo = document.createElement("p");
            dateToDo.setAttribute("class", "dateToDo");
            dateToDo.textContent = toDo.dueDate;
            cardSubSection2.appendChild(dateToDo);

            let pencilSvg = document.createElement("img");
            pencilSvg.setAttribute("src", pencil);
            pencilSvg.setAttribute("alt", "edit");
            pencilSvg.setAttribute("class", "pencilSvg");
            cardSubSection.appendChild(pencilSvg);
        }
    }
    static initializeviews(projects){
        drawSidebarProjects(projects);
        drawProject(projects[0]);
    }
}

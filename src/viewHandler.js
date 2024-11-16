import pencil from "./edit.svg"

class ViewHandler{

    static drawSidebarProjects(projectlist) {
        const projectsSection = document.querySelector("#projectsSection");
        projectsSection.innerHTML = ""
        let projectCounter = 0;
        for (let i = 0; i<projectlist.length; i++){
            let projectCard = document.createElement("div");
            projectCard.setAttribute("class", "project");
            projectCard.setAttribute("data-ProjectCounter",  projectCounter);
            projectCounter++;

            let projectName = document.createElement("p");
            projectName.textContent = projectlist[i].name;

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

        for (let i = 0; i < project.toDoList.length; i++){
            let todoCard = document.createElement("div");
            todoCard.setAttribute("class", "todoCard");
            todoCard.setAttribute("data-toDoCounter",  toDoCounter);
            toDoCounter++;
            cardContainer.appendChild(todoCard);

            let cardSubSection1  = document.createElement("div");
            let cardSubSection2 = document.createElement("div");
            cardSubSection1.setAttribute("class", "cardSubSection");
            cardSubSection2.setAttribute("class", "cardSubSection");
            todoCard.appendChild(cardSubSection1);
            todoCard.appendChild(cardSubSection2);

            let container = document.createElement("label");
            container.setAttribute("class", "container")
            cardSubSection1.appendChild(container);

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
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
            cardSubSection2.appendChild(pencilSvg);
        }
    }
    static initializeviews(projectlist){
        this.drawSidebarProjects(projectlist);
        this.drawProject(projectlist[0]);
    }
}

export { ViewHandler };
class modalHandler {
  static createTodoModal() {
    const modal = document.createElement("dialog");
    modal.setAttribute("class", "modalDialog");
    

    const modalContainer = document.querySelector("#modalContainer")
    modalContainer.appendChild(modal);

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    form.setAttribute("class", "myForm");
    modal.appendChild(form);

    const modaltitle = document.createElement("h2");
    modaltitle.setAttribute("class", "modaltitle");
    modaltitle.textContent = "Add new To Do";
    form.appendChild(modaltitle);

    const formElements = document.createElement("div");
    formElements.setAttribute("class", "formElements"),
      form.appendChild(formElements);

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "buttonContainer");
    form.appendChild(buttonContainer);

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("class", "submitBtn");
    submitBtn.textContent = "Add To Do";
    buttonContainer.appendChild(submitBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("class", "cancelBtn");
    cancelBtn.textContent = "Cancel";
    buttonContainer.appendChild(cancelBtn);

    const labelInputPair1 = document.createElement("div");
    const labelInputPair2 = document.createElement("div");
    const labelInputPair3 = document.createElement("div");
    const labelInputPair4 = document.createElement("div");
    labelInputPair1.setAttribute("class", "labelInputPair");
    labelInputPair2.setAttribute("class", "labelInputPair");
    labelInputPair3.setAttribute("class", "labelInputPair");
    labelInputPair4.setAttribute("class", "labelInputPair");

    formElements.appendChild(labelInputPair1);
    formElements.appendChild(labelInputPair2);
    formElements.appendChild(labelInputPair3);
    formElements.appendChild(labelInputPair4);

    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const label3 = document.createElement("label");
    const label4 = document.createElement("label");
    label1.setAttribute("class", "labelForm");
    label2.setAttribute("class", "labelForm");
    label3.setAttribute("class", "labelForm");
    label4.setAttribute("class", "labelForm");
    label1.setAttribute("for", "Title");
    label2.setAttribute("for", "Description");
    label3.setAttribute("for", "Priority");
    label4.setAttribute("for", "Date");
    label1.textContent = "Title:";
    label2.textContent = "Description:";
    label3.textContent = "Priority:";
    label4.textContent = "Due Date:";

    labelInputPair1.appendChild(label1);
    labelInputPair2.appendChild(label2);
    labelInputPair3.appendChild(label3);
    labelInputPair4.appendChild(label4);

    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("select");
    const input4 = document.createElement("input");

    input1.setAttribute("required", "");
    input1.setAttribute("placeholder", "Title");
    input1.setAttribute("id", "Title");
    input1.setAttribute("class", "textElement");
    input1.setAttribute("type", "text");

    input2.setAttribute("required", "");
    input2.setAttribute("placeholder", "Description");
    input2.setAttribute("id", "Description");
    input2.setAttribute("class", "textElement");
    input2.setAttribute("type", "text");

    input3.setAttribute("required", "");
    input3.setAttribute("placeholder", "Priority");
    input3.setAttribute("id", "Priority");
    input3.setAttribute("class", "textElement");
    input3.setAttribute("name", "priorities");

    input4.setAttribute("required", "");
    input4.setAttribute("placeholder", "Date");
    input4.setAttribute("id", "Date");
    input4.setAttribute("class", "textElement");
    input4.setAttribute("type", "date");

    labelInputPair1.appendChild(input1);
    labelInputPair2.appendChild(input2);
    labelInputPair3.appendChild(input3);
    labelInputPair4.appendChild(input4);

    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    option1.setAttribute("value", "Low");
    option2.setAttribute("value", "Medium");
    option3.setAttribute("value", "High");
    option1.textContent = "Low";
    option2.textContent = "Medium";
    option3.textContent = "High";
    input3.appendChild(option1);
    input3.appendChild(option2);
    input3.appendChild(option3);


  }

  static showTodoModal(){    
    const modal = document.querySelector(".modalDialog");
    modal.showModal();

  }
  
  static createProjectModal() {
    const modal = document.createElement("dialog");
    modal.setAttribute("class", "modalDialog2");

    const modalContainer = document.querySelector("#modalContainer")
    modalContainer.appendChild(modal);

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    form.setAttribute("class", "myForm");
    modal.appendChild(form);

    const modaltitle = document.createElement("h2");
    modaltitle.setAttribute("class", "modaltitle2");
    modaltitle.textContent = "Add New Project";
    form.appendChild(modaltitle);

    const formElements = document.createElement("div");
    formElements.setAttribute("class", "formElements2"),
      form.appendChild(formElements);

    const labelInputPair1 = document.createElement("div");

    labelInputPair1.setAttribute("class", "labelInputPair");

    formElements.appendChild(labelInputPair1);

    const label1 = document.createElement("label");

    label1.setAttribute("class", "labelForm");

    label1.setAttribute("for", "Title");

    label1.textContent = "Title:";

    labelInputPair1.appendChild(label1);

    const input1 = document.createElement("input");

    input1.setAttribute("required", "");
    input1.setAttribute("placeholder", "Title");
    input1.setAttribute("id", "Title");
    input1.setAttribute("class", "textElement");
    input1.setAttribute("type", "text");

    labelInputPair1.appendChild(input1);

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "buttonContainer");
    form.appendChild(buttonContainer);

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("class", "submitBtn");
    submitBtn.textContent = "Add Project";
    buttonContainer.appendChild(submitBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("class", "cancelBtn");
    cancelBtn.textContent = "Cancel";
    buttonContainer.appendChild(cancelBtn);
  }


  static showProjectModal(){    
    const modal = document.querySelector(".modalDialog2");
    modal.showModal();

  }

  static createExpandModal() {

    
    const modal = document.createElement("dialog");
    modal.setAttribute("class", "modalDialog3");


    const modalContainer = document.querySelector("#modalContainer")
    modalContainer.appendChild(modal);

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    form.setAttribute("class", "myForm");
    modal.appendChild(form);

    const modaltitle = document.createElement("h2");
    modaltitle.setAttribute("class", "modaltitle3");
    modaltitle.textContent = "[Title]";
    form.appendChild(modaltitle);

    const formElements = document.createElement("div");
    formElements.setAttribute("class", "formElements3"),
      form.appendChild(formElements);

    const descriptionText = document.createElement("p");
    const dateText = document.createElement("p");
    const priorityText = document.createElement("p");
    descriptionText.setAttribute("class", "desc");
    dateText.setAttribute("class", "date");
    priorityText.setAttribute("class", "prio");
    descriptionText.textContent = "Description: ";
    dateText.textContent = "Due Date: ";
    priorityText.textContent = "Priority: ";
    formElements.appendChild(descriptionText);
    formElements.appendChild(dateText);
    formElements.appendChild(priorityText);


    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "buttonContainer");
    form.appendChild(buttonContainer);

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("class", "submitBtn");
    submitBtn.textContent = "Delete To Do";
    buttonContainer.appendChild(submitBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("class", "cancelBtn");
    cancelBtn.textContent = "Cancel";
    buttonContainer.appendChild(cancelBtn);

  }


  static showExpandModal(todo){    
    console.log(todo.title);
    const modal = document.querySelector(".modalDialog3");
    const title = document.querySelector(".modaltitle3");
    const desc = document.querySelector(".desc");
    const date = document.querySelector(".date");
    const prio = document.querySelector(".prio");


    console.log(title);
    desc.textContent = "Description: " + todo.description;
    date.textContent = "Date: " + todo.dueDate;
    prio.textContent = "Date: " + todo.priority;
    title.textContent = todo.title;
    modal.showModal();

  }

}

export { modalHandler };
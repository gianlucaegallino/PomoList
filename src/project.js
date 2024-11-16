class Project {
    constructor(name){
        this.toDoList = [];
        this.name = name;
    }

    addToDo(toDo){
        this.toDoList.push(toDo);
    }
}

export {Project};
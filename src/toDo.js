class toDo {
    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    updateStatus(stat){
        this.status = !stat;
    }
}

export {toDo};
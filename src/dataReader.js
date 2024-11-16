function readData(currentProject){
   if(localStorage.getItem("MyProjects")) {
    return JSON.parse(localStorage.getItem("MyProjects"))
   } else return currentProject;
}

export { readData };
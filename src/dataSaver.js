function saveData(projectList){

    const jsonString= JSON.stringify(projectList);

    localStorage.setItem("MyProjects", jsonString);
    
}
function exportDataToFile(projectList, fileName){

    const jsonString= JSON.stringify(projectList);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;

    link.download = fileName || 'MyProjects.json';

    link.click();

    URL.revokeObjectURL(url);
}

export {exportDataToFile}; 
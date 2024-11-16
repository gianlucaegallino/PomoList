function importDataFromFile(file){

    if (file && file.type === 'application/json') {
        const reader = new FileReader();
  
        reader.onload = function(e) {
          try {
            const jsonData = JSON.parse(e.target.result);
            alert('JSON file successfully loaded!');
          } catch (error) {
            alert('Error parsing JSON file.');
          }
        };
        reader.readAsText(file);
        return jsonData;
      } else {
        alert('Please select a valid JSON file.');
      }
}

function downloadFile() {
  fetch('./GarminReady.txt')
    .then(response => response.text())
    .then(text => {
      // Process the text content here (optional)
      //console.log(text);

      // Create a Blob object and download link
      const blob = new Blob([text], { type: 'text/plain' }); // Adjust MIME type as needed
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // Use a fixed download name or modify based on logic
      a.download = 'GarminReady.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error fetching file:', error);
    });
}

function upload() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContent = e.target.result;
    //console.log(fileContent); // Print the file content to the console

    


  };

  reader.readAsText(file); // Read the file as text
  //writefile(file)

}

function writefile(fileContent) {
  console.log("writefile IS WORKING")
  console.log(fileContent)

}

function test() {
  console.log("test")
  const elementHolder = document.getElementById('element-holder');
  elementHolder.textContent = 'main java script';
}


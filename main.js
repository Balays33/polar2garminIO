
function downloadFile() {
    fetch('./GarminReady.txt')
      .then(response => response.text())
      .then(text => {
        // Process the text content here (optional)
        console.log(text);
  
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
 
function upload(){

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  console.log(file);

}

function test(){
  console.log("test")
}


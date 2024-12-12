
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

function upload() {
  console.log("This is the upload function")

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  // Get file name
  const fileName = file.name;

  // Get file size
  const fileSize = file.size;

  // Get file type
  const fileType = file.type;

  // Get last modified date
  const lastModified = file.lastModifiedDate;

  // Now you can use these properties as needed
  console.log('File Name:', fileName);
  console.log('File Size:', fileSize);
  console.log('File Type:', fileType);
  console.log('Last Modified:', lastModified);

  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContent = e.target.result;
    console.log('File Content:', fileContent);

    fixthefile(fileContent);

    writefile(fileContent);

    const elementHolder2 = document.getElementById('newtext');
    elementHolder2.textContent = fileName;

  };

  reader.readAsText(file); // Read the file as text

}

function fixthefile(fileContent, str, start, end) {
  console.log("This is the fix function")

  
    const result = str.match(new RegExp(start + "(.*)" + end));

    return result[1];


const testString = '124 photos in 22 photo albums';

console.log(getStringBetween(testString, 'in ', ' photo'));



  return fileContent;
}

function writefile(fileContent) {
  console.log("writefile IS WORKING");

  // Create a Blob object with the file content

  const blob = new Blob([fileContent], { type: 'text/plain' });

  // Create a download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'GarminReady.TCX'; 

  // Trigger the download
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); 
}


function testmain() {
  console.log("test it has to sort out")
  const elementHolder = document.getElementById('element-holder');
  elementHolder.textContent = 'main java script plus Balazs';

  const elementHolder2 = document.getElementById('newtext');
  elementHolder2.textContent = 'Balazs';

}



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

  //display the upload file name on the main page
  const elementHolder2 = document.getElementById('upload-file-name');
  elementHolder2.textContent = fileName;

  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContent = e.target.result;
    // console.log('File Content:', fileContent);

    let startWord = "<Creator";
    let endWord = "</Creator>";
    const fileContent1 = fixthefile(fileContent, startWord, endWord);

    startWord = "<Author";
    endWord = "</Author";
    const fileContent2 = fixthefile(fileContent1, startWord, endWord);
    writefile(fileContent2);



  };

  reader.readAsText(file); // Read the file as text

}

//function fixthefile(fileContent, str, start, end) {
function fixthefile(fileContent, startWord, endWord) {
  console.log("This is the fix function");
  //console.log(fileContent);
  // let text = fileContent;
  // let result= text.replace("teszt","TEST")
  // console.log("new one: "+result);
  //console.log(fileContent);

  // Find the starting index of the startWord
  const startIndex = fileContent.indexOf(startWord);

  // If startWord is not found, return the original string
  if (startIndex === -1) {
    return fileContent;
  }

  // Find the ending index of the endWord
  const endIndex = fileContent.indexOf(endWord, startIndex + startWord.length);

  // If endWord is not found after startWord, return the original string
  if (endIndex === -1) {
    return fileContent;
  }
  // Extract the parts before and after the section to be deleted
  const before = fileContent.substring(0, startIndex);
  const after = fileContent.substring(endIndex + endWord.length);

  // Combine the parts to create the modified string
  fileContent = before + after;
  //console.log(fileContent);



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

function display_info() {
  console.log("display_info function IS WORKING");
  //const elementHolder = document.getElementById('element-holder');
  //elementHolder.textContent = 'main java script plus Balazs';
  const first_line_holder = document.getElementById("first_line_holder");
  first_line_holder.textContent = "What it does? It reads the content, ";

  
}


function testmain() {
  console.log("test function IS WORKING");

  const elementHolder = document.getElementById('element-holder');
  elementHolder.textContent = 'main java script plus Balazs';
}





const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");
const copyButton = document.getElementById("copy-button");
const summarizedTextArea = document.getElementById("summary");
const wordCount = document.querySelector(".word-count");
const summarySection = document.getElementById("summary-section");

// Disable the submit button by default until the user enters text
submitButton.disabled = true;

// Add event listeners for various user interactions
textArea.addEventListener("input", verifyTextLength);  // Check text length on input
submitButton.addEventListener("click", submitData);    // Handle summarize button click
clearButton.addEventListener("click", clearText);     // Handle clear button click
copyButton.addEventListener("click", copySummary);     // Handle copy button click

// Function to verify the length of the text in the textarea and update word count
function verifyTextLength(e) {
 // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called 'text'
  // The value of the textarea is accessed using e.target.value, which gives us the current text inside the textarea.
  const text = e.target.value;
  // Calculate word count ( 0 if empty, else split by whitespace)
  const wordCountValue = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  wordCount.textContent = `${wordCountValue} words`;  // Update the word count display

  // Enable submit button only if we have at least 100 words under 100000 characters
  // Verify the word count value.
  if (wordCountValue >= 100 && text.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  }
  else {
    // Disable the button when text area is empty.
    submitButton.disabled = true;
  }
}

// Function to clear the text area and reset the UI
function clearText(e) {
  // Clear the text area
  textArea.value = "";
  // Rest the word count display
  wordCount.textContent = "0 words";
  submitButton.disabled = true; // Disable the submit button
  // Hide the summary section if it is visible
  summarySection.classList.add("hidden");
}

// Function to submit the text to the server for summarization
function submitData(e) {

 // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  // Get the text to summarize from the textarea
  const text_to_summarize = textArea.value;

  // Prepare headers for the API request
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Prepare the request body with the text to summarize
  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  // Set up the request options 
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // Send the text to the server using fetch API

 // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      // Do something with the summary response from the back end API!

      // Update the output text area with new summary
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
      summarySection.classList.remove("hidden");
    })
    .catch(error => {
      console.log(error.message);
      // Stop the spinning loading animation
      // If there is an error, we will stop the loading animation and show the error message
      submitButton.classList.remove("submit-button--loading");
    });
}

function copySummary(e) {
  // Copy the summary to the clipboard
  summarizedTextArea.select(); // Select the text in the summary textarea
  document.execCommand("copy"); // Execute the copy command

  // Temporarily change the button text to "copied!" for user feedback
  copyButton.textContent = "Copied!";

  // After 2 seconds, revert the button text back to "Copy"
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2000); // Reset the button text after 2 seconds
}
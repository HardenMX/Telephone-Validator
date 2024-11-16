const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// EVENTS - BUTTONS
userInput.value = "";

// EVENTS - FUNCTIONS
 function clearInfo () { if (userInput.value != "") {
    userInput.value = "";
    resultsDiv.remove();
    } 
}
 function checkInfo () {
    // INPUT FILTER
    const filteredInput = userInput.value.replace(/[()\- ]/gi, "");
 
    // IF CHECKS
    if (userInput.value === "") alert("Please provide a phone number");
    else if (filteredInput[0] == 1 || filteredInput.length == 11) 
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else if (filteredInput[0] != 1 && filteredInput.length == 10)
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
 }

clearButton.addEventListener('click', clearInfo);
checkButton.addEventListener('click', checkInfo);




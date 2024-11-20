const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// VARS
userInput.value = "";

// EVENTS - BUTTONS
const clearInfo = () => { if (userInput.value != "") {
    userInput.value = "";
    resultsDiv.remove();
    }}
const checkInfo = () => {
    // INPUT FILTER
    const regexFilter = /[()\- ]/gi;
    const filteredInput = userInput.value.replace(regexFilter, "");
    let matches = userInput.value.match(regexFilter);
    // IF CHECKS
    if (userInput.value === "") alert("Please provide a phone number");
    else if (userInput.value[0] === ')' || userInput.value[0] === '(' || userInput.value[0] === '-')
         resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (filteredInput[0] == 1 && filteredInput.length == 11 && [...filteredInput].every(char => char >= '0' && char <= '9')) 
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else if (filteredInput[0] != 1 && filteredInput.length == 10)
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
 }

checkButton.addEventListener('click', checkInfo);
clearButton.addEventListener('click', clearInfo);
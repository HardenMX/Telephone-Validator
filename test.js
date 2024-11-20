const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// VARS
userInput.value = "";

// EVENTS - BUTTONS
const clearInfo = () => { if (userInput.value) {
    userInput.value = "";
    resultsDiv.innerText = "";
    }}

const checkInfo = () => {
    // INPUT FILTER
    const regexFilter = /[()\- ]/gi;
    const filteredInput = userInput.value.replace(regexFilter, "");
    let matches1 = userInput.value.match(/-/g, 0);
    if (matches1 == null) matches1 = 0;
    //console.log(matches1);

    // IF CHECKS
    if (userInput.value === "") alert("Please provide a phone number");
    else if (userInput.value[0] === ')' || userInput.value[0] === '(' || userInput.value[0] === '-')
         resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (matches1.length >= 3) resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (filteredInput[0] == 1 && filteredInput.length == 11 && [...filteredInput].every(char => char >= '0' && char <= '9')) 
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else if (filteredInput[0] != 1 && filteredInput.length == 10)
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    }

checkButton.addEventListener('click', checkInfo);
clearButton.addEventListener('click', clearInfo);
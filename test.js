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
    let matches1 = userInput.value.match(/-/g);
    let matches2 = userInput.value.match(/\(/g);
    let matches3 = userInput.value.match(/\)/g);
    if (matches1 == null) matches1 = 0;
    if (matches2 == null) matches2 = 0;
    if (matches3 == null) matches3 = 0;
    console.log(matches2.length, matches3.length);
    
    // IF CHECKS
    if (userInput.value === "") alert("Please provide a phone number");
    else if (userInput.value[0] === ')' || userInput.value[0] === '(' && userInput.value[4] != ')' || userInput.value[0] === '-' )
         resultsDiv.innerHTML = "Invalid US number: " + userInput.value ;
    else if (matches1.length >= 3) resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (matches2.length != 1 && matches3.length == 0)
             resultsDiv.innerHTML = "Invalid US number: " + userInput.value + " one";
    else if (matches2.length != 0 && matches3.length == 1)
        resultsDiv.innerHTML = "Invalid US number: " + userInput.value + " two";
    else if (filteredInput[0] == 1 && filteredInput.length == 11 && [...filteredInput].every(char => char >= '0' && char <= '9')) 
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else if (filteredInput[0] != 1 && filteredInput.length == 10)
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    }

checkButton.addEventListener('click', checkInfo);
clearButton.addEventListener('click', clearInfo);
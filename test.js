const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// VARS
userInput.value = "";
let matches1 = 0, matches2 = 0, matches3 = 0;

// EVENTS - BUTTONS
const clearInfo = () => { if (userInput.value) {
    userInput.value = "";
    resultsDiv.innerText = "";
    }}

    // COUNT ALL THESE SYMBOLS ---> -, (, ).
    const countSymbols = () => {
        matches1 = userInput.value.includes("-") ? userInput.value.match(/-/g).length : 0;  
        matches2 = userInput.value.includes("(") ? userInput.value.match(/\(/g).length : 0;
        matches3 = userInput.value.includes(")") ? userInput.value.match(/\)/g).length : 0;  
    }
    
const checkInfo = () => {
    // INPUT FILTER
    const regexFilter = /[()\- ]/gi;
    const filteredInput = userInput.value.replace(regexFilter, "");
    countSymbols();

    // IF CHECKS
    if (userInput.value === "") alert("Please provide a phone number");
    else if (userInput.value[0] === ')' || userInput.value[0] === '(' && userInput.value[4] != ')' || userInput.value[0] === '-' )
         resultsDiv.innerHTML = "Invalid US number: " + userInput.value ;
    else if (matches1 >= 3 && matches2 > 1 && matches3 > 1) resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (userInput.value[userInput.value.length-2] == "-") resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (matches2 == 1 && matches3 != 1)
            resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (matches2 != 1 && matches3 == 1)
            resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    else if (filteredInput[0] == 1 && filteredInput.length == 11 && [...filteredInput].every(char => char >= '0' && char <= '9')) 
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else if (filteredInput[0] != 1 && filteredInput.length == 10)
        resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    else resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    }

checkButton.addEventListener('click', checkInfo);
clearButton.addEventListener('click', clearInfo);
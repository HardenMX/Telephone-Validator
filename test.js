const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// EVENTS - BUTTONS
userInput.value = "";

// EVENTS - FUNCTIONS
//const filterNumber = (userInput) => {};
const filterRegex = /\w+/gi

 function clearInfo () { if (userInput.value != "") userInput.value = ""; }
 function checkInfo () {
    // CREATE FILTER FOR -, (),
    if (userInput.value === "") {
        window.alert("Please provide a phone number");

        //ELSE IF DOESNT WORK CHANGE THIS
    } else if (userInput.value.includes(filterRegex)) {
        window.alert("Invalid US number: " + userInput);
    }
 }

clearButton.addEventListener('click', clearInfo);
checkButton.addEventListener('click', checkInfo);




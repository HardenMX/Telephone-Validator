const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// EVENTS - BUTTONS
userInput.value = "";

// EVENTS - FUNCTIONS
//const filterNumber = (userInput) => {};
function clearInfo() { if (userInput.value != "") userInput.value = ""; }

clearButton.addEventListener('click', clearInfo);
//checkButton.addEventListener('', clearInfo(userInput));


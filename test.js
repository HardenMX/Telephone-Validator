const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// EVENTS - BUTTONS


// EVENTS - FUNCTIONS
//const filterNumber = (userInput) => {};
function clearInfo(a) {
    if (a != "" && a != null) {
        userInput.innerText = "";
        console.log('hi2');
    }
}

clearButton.addEventListener('click', clearInfo(userInput));
//checkButton.addEventListener('', clearInfo(userInput));

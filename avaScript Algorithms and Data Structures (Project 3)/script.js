/*Telephone Number Validator Project JavaScript File*/

const inputReceive = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const checkBtn = document.getElementById('check-btn');
const resultOutput = document.getElementById('results-div');

const regex1 = /^1 [\d]{3}[-\s][\d]{3}[-\s][\d]{4}$/;
const regex2 =  /^1\s?\([\d]{3}\) [\d]{3}-[\d]{4}$/;
const regex3 = /^[\d]{3}-?[\d]{3}-?[\d]{4}$/;
const regex4 = /^\([\d]{3}\)[\d]{3}-[\d]{4}/;
const regex5 =  /^1\(?[\d]{3}\)?[\d]{3}-[\d]{4}$/;

const checkList = [regex1, regex2, regex3, regex4, regex5];


const isNumber = number => checkList.some(regex => regex.test(number));


const valueChecker = () => {
    if (isNumber(inputReceive.value)){
        resultOutput.innerHTML += `
        <p class="greener">Valid US number: ${inputReceive.value}</p>
        `
    }
    else{
        resultOutput.innerHTML += `
        <p class="browner">Invalid US number: ${inputReceive.value}</p>
        `
    }

    inputReceive.value = ""
}
checkBtn.addEventListener('click', () => {
    if (inputReceive.value === ""){
        alert('Please provide a phone number');
    }
    valueChecker();
}

)

clearButton.addEventListener('click', () => {
    resultOutput.innerHTML = ""
})

inputReceive.addEventListener('keydown', (e) => {
    if ((e.key) === "Enter"){
        valueChecker();
    }
})

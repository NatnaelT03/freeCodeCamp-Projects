/* Palindrome Checker Project JavaScript File*/



const inputElement = document.querySelector('.text-input')
const resultElement = document.querySelector('.result');

function palindromeChecker(){
    const inputText = inputElement.value;
    const cleanText = cleanInputString(inputText).toLowerCase()

    if(cleanText === ""){
        alert('Please input a value');
    }
    else{
    const reversed = stringReverse(cleanText);

    if (cleanText === reversed){
        resultElement.innerHTML = `<p><strong>${inputText}</strong> is a palindrome</p>`
        inputElement.value = "";
    }
    else {
        resultElement.innerHTML = `<p><strong>${inputText}</strong> is not a palindrome</p>`
        inputElement.value = "";
    }
    }   

    
}
function cleanInputString(str) {
  const regex = /[^\w]/g;
  str = str.replace('_','');
  return str.replace(regex, '');
}

function stringReverse(str){
    let reverseWord = "";

    for (let i = str.length -1; i>=0; i--){
        reverseWord += str[i];
    }

    return reverseWord;
}

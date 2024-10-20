/* Roman Numeral Converter Project JavaScript File*/


const inputValue = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');
const outputPara = document.getElementById('output-para');



const romanConverter = (input) => {
  let outputResult = ""

    if (input >= 1000){
      input -= 1000;
      outputResult += "M";
      return outputResult + romanConverter(input);
    }
    if(input >= 900 && input < 1000){
      input -= 900;
      outputResult += "CM";
      return outputResult + romanConverter(input);
    }
    if(input >=500 && input < 900){
      input -= 500;
      outputResult += "D";
      return outputResult + romanConverter(input);
    }
    if(input>= 400 && input < 500){
      input-= 400;
      outputResult += "CD";
      return outputResult + romanConverter(input);
    }
    if(input>=100 && input < 400){
      input-= 100;
      outputResult += "C";
      return outputResult + romanConverter(input);
    }
    if(input>=90 && input<100){
      input -= 90;
      outputResult += "XC";
      return outputResult + romanConverter(input);
    }
    if(input>=50 && input < 90){
      input -= 50;
      outputResult += "L";
      return outputResult + romanConverter(input);
    }
    if(input>=40 && input<50){
      input -= 40;
      outputResult += "XL";
      return outputResult + romanConverter(input);
    }
    if(input >= 10 && input<40){
      input -= 10;
      outputResult += "X";
      return outputResult + romanConverter(input);
    }
    if(input == 9){
      input -= 9;
      outputResult += "IX";
      return outputResult + romanConverter(input);
    }
    if(input>=5 && input<9){
      input -= 5;
      outputResult += "V";
      return outputResult + romanConverter(input);
    }
    if(input == 4){
      input -= 4;
      outputResult += "IV";
      return outputResult + romanConverter(input);
    }
    if(input >1 && input < 4){
      input -= 1;
      outputResult += "I";
      return outputResult + romanConverter(input);
    }
    if(input == 1){
      outputResult += "I";
      return outputResult;
    }

    return "";
}

convertButton.addEventListener("click", () => {
  outputPara.className = "";
  let inputVal = inputValue.value;

  if(inputVal === ""){
    outputDiv.className = 'danger-output';
    outputPara.innerText = "Please enter a valid number";
    return;
  }
  valueChecker();
});

inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    valueChecker();
  }
});

const valueChecker = () => {
  outputPara.className = ""
  let inputVal = parseInt(inputValue.value,10)


  if(inputVal <= 0){
    outputDiv.className = 'danger-output';
    outputPara.innerText = "Please enter a number greater than or equal to 1."
    return;
  }
  if(inputVal > 3999){
    outputDiv.className = 'danger-output';
    outputPara.innerText = "Please enter a number less than or equal to 3999."
    return;
  }

  outputDiv.className = 'safe-output';
  let result = romanConverter(inputVal);
  outputPara.innerText = result;
}

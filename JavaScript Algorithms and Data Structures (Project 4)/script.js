// Cash Register Project JavaScript File
// Couldn't let is pass tests 16-19

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['HUNDRED', 100]
];

const cash = document.getElementById('cash');
const btn = document.getElementById('purchase-btn');
const changeOutput = document.getElementById('change-due');




const standardChecker= () => {
    const inputCash = Number(cash.value) * 100;
    const total_cid = (cid.reduce((total,innerArr) => total+innerArr[1], 0).toFixed(2)) * 100;
    const userChange = inputCash - (price * 100);

    if(userChange > total_cid){
        changeOutput.innerText = "Status: INSUFFICIENT_FUNDS";
        
    }
    if(userChange === total_cid){
        changeOutput.innerText = "Status: CLOSED";

    }
    if(userChange < total_cid){
        changeOutput.innerHTML = `<p>Status: OPEN</p>`;
    }

    if(inputCash === price*100){
        changeOutput.innerText = "No change due - customer paid with exact cash";
        
    }
}

const changeMaker = () => {

    standardChecker()

    const total_cid = (cid.reduce((total,innerArr) => total+innerArr[1], 0).toFixed(2)) * 100;
    let newCid = [...cid];
    const denomination = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let changeGiven = 0;
    let changeGivenArr = []
    const inputCash = Number(cash.value) * 100;
    let userChange = inputCash - (price * 100);

    cash.value = "";


    while(changeGiven < userChange && userChange <= total_cid){
        for(let i  = newCid.length - 1; i >= 0; i--){
            let amountGiven = 0;

            while ((userChange >= denomination[i]) && ((newCid[i][1] * 100) >= denomination[i]) && ((newCid[i][1]) > 0)){
                
                amountGiven += (denomination[i] / 100); 
                newCid[i][1] -= (denomination[i]/100);  
                userChange -= denomination[i];  
                changeGiven += denomination[i]; 
                
            }

            if(amountGiven > 0){
                changeGivenArr.push([newCid[i][0], amountGiven]);
                changeOutput.innerHTML += `<p>${newCid[i][0]}: $${amountGiven.toFixed(2)}</p>`
                document.getElementById((newCid[i][0]).toLowerCase()).innerText = `${(newCid[i][0]).charAt(0).toUpperCase() + (newCid[i][0]).slice(1).toLowerCase()} : $${(newCid[i][1]).toFixed(2)}`;
            }
        }
    }

}


btn.addEventListener('click', () => {
    const inputCash = Number(cash.value) * 100;
    if((inputCash / 100) < price){
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    changeMaker();
}
);

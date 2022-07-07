const heightinput = document.querySelector("#input-height");
const weightinput = document.querySelector("#input-weight");
var calculate = document.querySelector("#calculate");
result = document.querySelector("#result");
const statement = document.querySelector("#result-statement");

calculate.addEventListener("click" , ()=>{

    let height = heightinput.value;
    let weight = weightinput.value;
    let bmi = (weight) / (height **2);
    result.innerHTML = bmi.toFixed(2);

    if(bmi < 18.5){
        statement.innerHTML = "underweight";
    }else if((bmi > 18.5) && (bmi < 24.9)){
        statement.innerHTML = "normal";
    }else if((bmi > 25) && (bmi < 29.9)){
        statement.innerHTML = "overweight";
    }else if(bmi > 29.9){
        statement.innerHTML = "Obese";
    }else {
        statement.innerHTML = "Enter the value";
    }

});
let temperature = document.getElementById("input-field");
let to_fahrenheit = document.getElementById("to-fahrenheit");
let to_celsius = document.getElementById("to-celsius");
let result = document.getElementById("result");
let btn_submit = document.getElementById("btn-submit");
let res;
let temp;

function toCelsius(temp){
    return (temp -32) * (5/9);
}

function toFahrenheit(temp){
    return temp * (9/5) + 32;
}

function convert(){
    if(to_fahrenheit.checked){
        temp= Number(temperature.value);
        res=toFahrenheit(temp)
        result.textContent= res.toFixed(1) + "F";
    }
    else if (to_celsius.checked){ 
        temp= Number(temperature.value);
        res = toCelsius(temp);
        result.textContent= res.toFixed(1) + "C";
    }
    else alert("Please select a unit");
}

btn_submit.addEventListener("click", convert);
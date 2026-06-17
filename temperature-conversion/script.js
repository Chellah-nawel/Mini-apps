let temperature = document.getElementById("input-field");
let to_fahrenheit = document.getElementById("to-fahrenheit");
let to_celsius = document.getElementById("to-celsius");
let result = document.getElementById("result");
let btn_submit = document.getElementById("btn-submit");

function toCelsius(temperature){
    return (temperature -32) * (5/9);
}

function toFahrenheit(temperature){
    return temperature * (9/5) + 32;
}

function convert(){
    temperature= Number(temperature.value);
    if(to_fahrenheit.checked){
        result.textContent= (toFahrenheit(temperature)).toFixed + "F";
    } else if (to_celsius.checked){
        result.textContent= (toCelsius(temperature).toFixed + "C");
    }
    else alert("Please select a unit");
}

btn_submit.addEventListener("click", convert);
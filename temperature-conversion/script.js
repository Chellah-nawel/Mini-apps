let temperature = document.getElementById("input-field")
let to_fahrenheit = document.getElementById("to-fahrenheit");
let to_celsius = document.getElementById("to-celsius");
let result = document.getElementById("result");

function to_celsius(temperature){
    return (temperature -32) * (5/9);
}
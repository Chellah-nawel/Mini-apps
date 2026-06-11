let counter= document.getElementById("number");
let btn_incr= document.getElementById("Increase");
let btn_decr= document.getElementById("Decrease");
let btn_reset= document.getElementById("Reset");
let val=0;

function plus(){
    val= Number(counter.textContent);
    val++;
    counter.textContent= val;
}

function minus(){
    val= Number(counter.textContent);
    val--;
    counter.textContent= val;

}

function res(){
    counter.textContent= 0;
}
btn_incr.addEventListener("click", plus);
btn_decr.addEventListener("click", minus);
btn_reset.addEventListener("click", res);
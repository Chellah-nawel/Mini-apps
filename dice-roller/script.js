let input = document.getElementById("input-field");
let btn = document.getElementById("submit-btn");
let result = document.getElementById("result");
let image_container = document.getElementById("image");

const images= ["images/dice.png", "images/dice (1).png", "images/dice (2).png", "images/dice (3).png", "images/dice (4).png", "images/dice (5).png"];
let dices;
let numbers=[];
let displayed_images=["-1"];

function roll_dices(){
    dices= Number(input.Value);
    for(let i=1; i<= dices; i++){
        dice_face= Math.floor(Math.random()*6)+1;
        numbers.push(dice_face);
        displayed_images.push(images[dice_face -1]);
    }

    result.textContent(numbers);
    image_container.textContent(displayed_images);

}

btn.addEventListener("click", roll_dices);
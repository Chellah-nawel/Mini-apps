let input = document.getElementById("input-field");
let btn = document.getElementById("submit-btn");
let result = document.getElementById("result");
let image_container = document.getElementById("images");
let container = document.getElementById("container");

const images= ["images/dice.png", "images/dice (1).png", "images/dice (2).png", "images/dice (3).png", "images/dice (4).png", "images/dice (5).png"];
let dices;
let numbers=[];
let displayed_images=[];

function roll_dices(){
    dices= Number(input.value);
    numbers=[];
    displayed_images=[];
    for(let i=1; i<= dices; i++){
        let dice_face= Math.floor(Math.random()*6)+1;
        numbers.push(dice_face);
        displayed_images.push(images[dice_face -1]);
    }

    result.textContent=numbers.join(",");
    image_container.innerHTML = "";

    for (let imgPath of displayed_images) {

        if(displayed_images.length>4){
            container.style.height= "550px";
        }

        const img = document.createElement("img");

        img.src = imgPath;
        img.width = 100;

        image_container.appendChild(img);
    }
}

btn.addEventListener("click", roll_dices);
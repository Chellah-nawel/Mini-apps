let rand_number= Math.random()*101

let number= window.prompt("Enter a number between 0 and 100");

while(number != rand_number){
    number= window.prompt("Enter a number between 0 and 100");
    
    if (number > rand_number){
        window.alert("Too Big, try another one");
    } else number < rand_number ? window.alert("Too Low, try again!") : window.alert("You did it it is the right number");

    
}

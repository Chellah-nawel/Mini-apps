let rand_number= Math.floor(Math.random()*101);
let attempts=0;
let number= -1;

while(number != rand_number){
    number= window.prompt("Enter a number between 0 and 100");
    attempts++;
    if (number > rand_number){
        window.alert("Too Big, try another one");
        attempts++;
    } else if (number < rand_number){
        window.alert("Too Low, try again!");} 
        else window.alert(`You did it it is the right number, with ${attempts} attempts`);
}

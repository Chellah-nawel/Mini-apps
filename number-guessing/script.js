let rand_number= Math.floor(Math.random()*101);
let attempts=0;
let number;
let running =true;
while(running){
    number= window.prompt("Enter a number between 0 and 100");
    if(isNaN(number)){
        window.alert("Please enter a valid number");
    }
    if(number>100 || number <0){
        window.localStorage("Please enter a number between 0 and 100")
    }
    attempts++;
    if (number > rand_number){
        window.alert("Too Big, try another one ^^(");
        attempts++;
    } else if (number < rand_number){
        window.alert("Too Low, try again !!)");} 
        else window.alert(`You did it, it's the right number, it took you ${attempts} attempts`);
}

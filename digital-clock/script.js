let timeCounter = document.getElementById("time");

function updateClock(){
    let time= new Date();
    hours= time.getHours();
    min= time.getMinutes();
    seconds= time.getSeconds();
    hours= hours.toString().padStart(2,0);
    min= min.toString().padStart(2,0);
    seconds= seconds.toString().padStart(2,0);
    let dateString =`${hours}: ${min}: ${seconds}`;
    timeCounter.textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);

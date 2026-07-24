let timeCounter = document.getElementById("time");

function updateClock(){
    let time= new Date();
    hours= time.getHours();
    min= time.getMinutes();
    seconds= time.getSeconds();
    hours= hours.toString();
    min= min.toString();
    seconds= seconds.toString();
    let dateString =`${hours}: ${min}: ${seconds}`;
    timeCounter.textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);

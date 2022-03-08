let seconds = 00;
let tens = 00;
let minutes = 00;
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let appendstore = document.getElementById("store")
let interval; // to store timer values

// this function will run when you press start

function startTimer(){
    tens++;

    if(tens<9){
        appendTens = "0" + tens;
    }
    if(tens>9){
        appendTens = tens;
    }
    if(tens>99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens = "0" + 0;
    }
    if(seconds>9) {
        appendSeconds.innerHTML = seconds;
    }
    if(seconds>59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes>9) {
        appendMinutes.innerHTML = minutes;
    }
}

// when you click start 
buttonStart.onclick = function() {
    interval = setInterval(startTimer);
};

// when clicked on stop
buttonStop.onclick = function() {
    clearInterval(interval);
};

// when clicked on reset
buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00"
    minutes = "00"
    appendSeconds.innerHTML = seconds;
    appendTens = tens;  
    appendMinutes.innerHTML = minutes;
}

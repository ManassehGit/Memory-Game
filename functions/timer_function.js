let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let appendstore = document.getElementById("store")
let interval; // to store timer values

// this function will run when you press start

function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds>9) {
        appendSeconds.innerHTML = seconds;
    }
}

// when you click start 
buttonStart.onclick = function() {
    interval = setInterval(startTimer);
};

// when clicked on stop
buttonStop.onclick = function() {
    clearInterval(interval);
    console.log(interval)
};

// when clicked on reset
buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00"
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;  
}

// store value on page
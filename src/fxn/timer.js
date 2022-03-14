
let seconds = 0;
let tens = 0;
let minutes = 0;


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
let TimerDisplay = document.querySelector(".TimerDisplay");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let msec = 00;
let sec = 00;
let mins = 00;
let hr = 00;

let timerId = null;

startBtn.addEventListener("click", function() {
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId = setInterval(startTimer, 10);
})

stopBtn.addEventListener("click", function() {
        clearInterval(timerId);
})
resetBtn.addEventListener("click", function() {
        clearInterval(timerId);
        msec = 0;
        sec = 0;
        mins = 0;
        updateDasplay();
})


function startTimer() {
    
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if(sec == 60) {
            sec = 0;
            mins++;
            if(mins == 60){
                mins = 0;
                hr++;
            }
        }
    }
    updateDasplay()
}

function updateDasplay() {
    let msecStr;
    if (msecStr < 10) {
        msecStr = '0${msec}';
    }else {
        msecStr = msec;
    }


    let secStr;
    if (secStr < 10) {
        secStr = '0';
    }else {
        secStr = sec;
    }


    let minsStr;
    if (minsStr < 10) {
        minsStr = '0${mins}';
    }else {
        minsStr = mins;
    }


    let hrStr;
    if (hrStr < 10) {
        hrStr = '0${hr}';
    }else {
        hrStr = hr;
    }

    TimerDisplay.innerHTML = `0${hrStr} : 0${minsStr} : ${secStr} : ${msecStr}`;
}

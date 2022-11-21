const { fromEvent } = rxjs;

let timer_form = document.getElementById('timer-form');
let start_button = document.getElementById('start-button');
let time_hour = document.getElementById('hour');
let time_minute = document.getElementById('minute'); 
let time_secs = document.getElementById('sec'); 

function countdown() {

    let seconds = parseInt(time_secs.value);
    let minutes = parseInt(time_minute.value);
    let hours = parseInt(time_hour.value);
    let timer = document.getElementById("timer");
    timer.innerHTML = "Countdown: " + hours + "h " + minutes + "m " + seconds + "s ";

    // if the user doesn't fill out all form field
    if(isNaN(hours)) {

        hours = 0;
    }

    if(isNaN(minutes)) {

        minutes = 0;
    }
    
    if(isNaN(seconds)) {

        seconds = 0;
    }

    // if the timer has reached 0
    if(seconds == 0 && minutes == 0 && hours == 0) {

        console.log("TIME IS UP");
        timer.innerHTML = "TIME UP!";

    } else {

        // decreasing the timer
        seconds--;
        if(seconds < 0) {
            if (minutes > 0) {

                seconds = 59;
                minutes--;

            } else {

                seconds = 0;
                minutes = 0;
            }
        }

        
        // hours--;
        if(minutes < 0) {
            if(hours > 0){

                minutes = 59;
                hours--;
            } else {

                minutes = 0;
                hours = 0;
            }
        }
        
    }

    timer.innerHTML = "Countdown: " + hours + "h " + minutes + "m " + seconds + "s "; 
    timer.style.fontSize = "30px";
    setTimeout("countdown()", 1000);
}


const start_button_click = fromEvent(start_button, 'click');
start_button_click.subscribe(() => {
    console.log('Timer has begun');
    countdown();
    
});


const { interval, take, map, fromEvent } = rxjs;

let timer_form = document.getElementById('timer-form');
let start_button = document.getElementById('start-button');
let displayTimer = document.getElementById("timer");

// Get users hour, minutes, and seconds input
const inputHours = document.getElementById('hour');
const inputMinutes =document.getElementById('minute'); 
const inputSeconds = document.getElementById('sec'); 

// create a time object that has hours, minutes and seconds attributes
const convertInputToTime = (time) => ({
    hours: Math.floor(time / 3600),
    minutes: Math.floor((time % 3600 / 60)),
    seconds: Math.floor(time % 3600 % 60)
});

function countdown(timer) {

    // console.log("total_time: " + timer);
    
    const time = interval(1000);

        time
        .pipe(take(timer))
        .pipe(map((val) => (timer - 1) - val)) // decrement until timer hits 0
        .pipe(map(convertInputToTime)) // map time to hours minutes and seconds
        .subscribe((time) => {
            convertInputToTime(time);
            console.log('Countdown:', time);
            displayTimer.style.fontSize = "30px";
            displayTimer.innerHTML = "Countdown: " + time.hours + "h " + time.minutes + "m " + time.seconds + "s";

            if(time.hours == 0 && time.minutes == 0 && time.seconds == 0) {

                displayTimer.innerHTML = "TIME'S UP!";
            }
        });

}

const start_button_click = fromEvent(start_button, 'click');
start_button_click.subscribe(() => {

    // converting user input to milliseconds 
    let hours = (parseInt(inputHours.value) * 60 * 60 * 1000);
    let mins = (parseInt(inputMinutes.value)) * 60 * 1000;
    let secs = (parseInt(inputSeconds.value)) * 1000;
    
    // if no input is given for hours / if hours is not a number
    if(isNaN(hours)) {

        hours = 0;
    }

    // if no input is given for minutes / if minutes is not a number
    if(isNaN(mins)) {

        mins = 0;
    }
    
    // if no input is given for seconds / if seconds is not a number
    if(isNaN(secs)) {

        secs = 0;
    }

    let total_time = secs + mins + hours;
    total_time = total_time / 1000;
    countdown(total_time);
    
});


// Initialize variables to keep track of minutes, seconds, and milliseconds

var min = 0;
var sec = 0;
var miliSec = 0;



// Initialize a variable for the timer

var timer;



// This function increments the time and updates the timer display
function callTimer() {
    miliSec++;



    // If milliseconds are less than 100, increment the timer without resetting anything
    if (miliSec < 100) {
        if (miliSec === 99) {

            // Reset milliseconds and increment seconds when milliseconds reach 100
            miliSec = 0;
            sec++;

            // If seconds reach 60, reset seconds and increment minutes
            if (sec === 60) {
                sec = 0;
                min++;
            }
        }
    }
    else {
        // Reset milliseconds when they reach 100
        miliSec = 0;
    }

    // Update the timer display with the current time
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}

// This function starts the timer
function start() {


    // Disable the "Start" button to prevent multiple timers running at once
    document.getElementById("start").disabled = true;

    // Call the callTimer() function every 10 milliseconds and set the timer variable to this interval
    timer = setInterval(callTimer, 10);
}

// This function stops the timer
function stop() {

    // Enable the "Start" button
    document.getElementById("start").disabled = false;

    // Stop the timer by clearing the interval set by the start() function
    clearInterval(timer);
}

// This function resets the timer to 0
function reset() {

    // Stop the timer
    stop();

    // Reset the variables for minutes, seconds, and milliseconds
    min = 0;
    sec = 0;
    miliSec = 0;

    // Update the timer display with the reset time
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}
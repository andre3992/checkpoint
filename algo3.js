/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) 
write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) { // You could have used two functions. one for the minuteAngle, another for the event listener
    if (minute > 60 || minute <= 0) {
        // console.log("There are only 60 minutes"); No need for the console.log
        alert("There are only 60 minutes");
        return;
    }
    const angle = (minute * 360) / 60;
    // console.log(angle); No need for the console.log
    return angle; // Missing the return statement
};

const textElement = document.getElementById("text");
document.getElementById('getAngle').addEventListener('click', () => { // add the event listener on click, for the button
    const minute = document.getElementById("myNumber").value;
    const angle = minuteAngle(minute);
    textElement.innerHTML = `The angle is ${angle} degrees`;
});
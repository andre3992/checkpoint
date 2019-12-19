/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) 
write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) {
    minute = document.getElementById("myNumber").value;
    let angle = 0;
    if (minute > 60) {
        alert("There are only 60 minutes")
        return
    }
    angle = (minute * 360) / 60;
    console.log(angle)
    document.getElementById("demo").innerHTML = `The angle is ${angle} degrees`;
};
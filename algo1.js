/*
We're building a ticket selling app for a cinema and we need to represent
all the seats in the main room.

In this room, the seats are organized as follows: 
    - There are 26 rows of seats. Each row is numbered from "1" to "26" 
    - Each row has 100 seats. Each seat is numbered from "1" to "100"
    

Create a function that returns an array of seats.
Each item in the array should be in the form: row-seat.

The final array should look something like this:
[
    1-1,
    1-2,
    1-3,
    .
    .
    .
    26-98,
    26-99,
    26-100
]
*/
const seats = []; // We don't change the reference. This can be a constant
const row = []; // We don't change the reference. This can be a constant
let numberSeats = 0; // If you don't use this variable outside of the for, you could use the i to your advantage
let numberRow = 0; // If you don't use this variable outside of the for, you could use the i to your advantage
const rowSeat = []; // We don't change the reference. This can be a constant

for (let i = 0; i < 100; i++) {
    numberSeats += 1; // You could drop the use of numberSeats if you start i at 1 and loop until i <= 100
    seats.push(numberSeats); // Missing semicolon
};

for (let i = 0; i < 26; i++) {
    numberRow += 1; // You could drop the use of numberRow if you start i at 1 and loop until i <= 26
    row.push(numberRow); // Missing semicolon
};

const seat = () => { // missing variable declaration
    for (let i = 0; i < row.length; i++) {
        for (let a = 0; a < seats.length; a++) {
            rowSeat.push(row[i] + "-" + seats[a]); // missing semicolon
        }
    }
    return rowSeat; // Missing semicolon. No need for () around the return expression.

}
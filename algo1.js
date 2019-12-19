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
let seats = [];
let row = [];
let numberSeats = 0;
let numberRow = 0;
let rowSeat = [];

for (let i = 0; i < 100; i++) {
    numberSeats += 1;
    seats.push(numberSeats)
};

for (let i = 0; i < 26; i++) {
    numberRow += 1;
    row.push(numberRow)
};

seat = () => {
    for (let i = 0; i < row.length; i++) {
        for (let a = 0; a < seats.length; a++) {
            rowSeat.push(row[i] + "-" + seats[a])
        }
    }
    return (rowSeat)

}
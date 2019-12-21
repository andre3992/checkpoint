/* 
The new guy in your team wrote this terrible code
and now he's asking you why it doesn't work...

He's telling you the specs are:
    - the function receives an array (of integers) or null.
    - the function should return the minimum and maximum values (of the given array)
    - the return value should also be an array, i.e: [min, max]

Example 1:
Array: [4, 6, 35, -65, -9, 0, 67]
Result: [-65, 67]

Example 2:
Array: [-30, 5, 43, 108, -5, -7, 89]
Result: [-30, 108]

Example 3:
Array: [56, 7, 63, 9, 7, 12, 85]
Result: [7, 85]

Fix the following function to help your new coworker!

Note: try changing only the necessary code, don't rewrite the entire thing. 
*/
const minMax = (array) => { // No need to define here as let. Since we won't redefine the function, a const here does the job just fine.
    let min = array[0]; // Why 1000 here? You could define this as array[0] as below.
    let max = array[0];
    let result = [];
    for (let i = 1; i < array.length; i++) { // You started the loop at 1 coupled with the min equal to 1000 as a default, this will lead to a bug when the array is only one element.
        if (array[i] < min) {
            min = array[i];
        };
        if (array[i] > max) {
            max = array[i];
        };

    }
    result.push(min, max);
    return result;
}
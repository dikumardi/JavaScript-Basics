/**  Practice exercise 3.3
 1. Create an array containing three values: 1, 2, and 3.
 2. Nest the original array into a new array three times.
 3. Output the value 2 from one of the arrays into the console. **/


 const arr = [1,2,3];
 const newArray = [arr, arr, arr ];

let answer = newArray[1][1];
console.log(answer);
             
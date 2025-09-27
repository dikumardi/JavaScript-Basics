//=========================================================================
/** 
 1. Start by setting a variable that gets a random value assigned to it.
  The value is assigned by generating a random number 0-5, for 6 possible results. You 
can increase this number as you add more results.

 2. Create a prompt that can get a string value input from a user that you can 
repeat back in the final output.

 3. Create 6 responses using the switch statement, each assigned to a different 
value from the random number generator.   

4. Create a variable to hold the end response, which should be a sentence 
printed for the user. You can assign different string values for each case, 
assigning new values depending on the results from the random value.

 5. Output the user's original question, plus the randomly selected case 
response, to the console after the user enters their question **/

//=========================================================================

let randomValue = Math.floor(Math.random()* 6);

console.log(Math.floor(randomValue));


let stringValue = prompt("Enter  a string value")
console.log(stringValue);


switch (randomValue) {
    case 0:
        console.log("This random value is zero");
        break;
    case 1:
        console.log("This random value is one");
        break;    
    case 2:
        console.log("This random value is Two");
        break; 
    case 3:
        console.log("This random value is Three");
        break;
     case 4:
        console.log("This random value is four");
        break;
     case 5:
        console.log("This random value is Five");
        break;
     default:
        console.log("Invalid number");
    
}
console.log("");

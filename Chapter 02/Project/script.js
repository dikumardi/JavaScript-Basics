 /**Miles-to-kilometers converter */
let miles = 130 ;
let distanceinkm = miles  *  1.60934 ;
console.log("The distance of ", miles, "kms is equal to ",distanceinkm, "miles");

/*  BMI calculator */
let inches = prompt("Enter your height in inches")
let pounds = prompt("Enter your weight in pound")


let height = inches * 2.54 // height in cm
let weight = pounds / 2.2046 // in kilo

let bmi = weight / (height/100* height/100) ; 
console.log(bmi);





/*        Self-check quiz   */
//  1. What data type is the following variable? 
// const c = "5";  // OUTPUT: STRING

//  2. What data type is the following variable? 
// const c = 91;  // OUTPUT: NUMBER

//  3. Which one is generally better, line 1 or line 2?
//  let empty1 = undefined; //line 1
//  let empty2 = null; //line 2 THIS

//  4. What is the console output for the following? 
// let a = "Hello";
//  a = "world";
//  console.log(a); // OUTPUT: world


//  5. What will be logged to the console?
//  let a = "world";
//  let b = `Hello ${a}!`;
//  console.log(b); // Helloworld!


//  6. What is the value of a? 
// let a = "Hello";
//  a = prompt("world");
//  console.log(a); //  output will be what user will type in the prompt box
 
//  What is the value of b output to the console? 
// let a = 5;
//  let b = 70;
//  let c = "5";
//  b++;
//  console.log(b); // 71


//  8. What is the value of result?
//  let result = 3 + 4 * 2 / 8; //4


// 9. What is the value of total and total2?
//  let firstNum = 5; 
//  let secondNum = 10;
//  firstNum++;
//  secondNum--;
//  let total = ++firstNum + secondNum;
//  console.log(total); // 16
//  let total2 = 500 + 100 / 5 + total--;
//  console.log(total2); // 536


//  10. What is logged to the console here?
//  const a = 5;
//  const b = 10;
//  console.log(a > 0 && b > 0); // true
// console.log(a == 5 && b == 4); // false
// console.log(true ||false); // true
// console.log(a == 3 || b == 10); //true
// console.log(a == 3 || b == 7); // false


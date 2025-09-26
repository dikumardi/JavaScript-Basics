/** Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
theorem when given the values of the other two sides. The theorem specifies that the 
relation between the sides of a right-angled triangle is a2 + b2 = c2 */
let a = prompt("Enter a");
let b = prompt("Enter b");
let hypotenuse = Math.sqrt(a * a + b * b);
console.log(hypotenuse);

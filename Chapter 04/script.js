//  if and if else statement
let rain = true ;
if (rain) {
    console.log(" Taking my umbrella when I need to go outside ");
    
}else{
    console.log(" I will leave my umbrella at home"); 
}

//  Taking my umbrella when I need to go outside 

/** Here is another example **/
let age = 21 ;
if (age < 18) {
    console.log("Access DEnied");
    
}else{
console.log( "the person is allowed to come in");
}

// the person is allowed to come in


 let hobby = "dancing";
 if(hobby == "coding"){
  console.log("** I love coding too! **");
 } else {
  console.log("** Can you teach me that? **");
 }



//   else if statements
/**  For example, take this statement, to determine what the ticket price should be. If a person is younger than 3, then access is free, else if a person is older than 3 and younger than 12, then access is 5 dollars, else if a person is older than 12 and younger than 65, then access is 10 dollars, else if a person is 65 or older, then access is 7 
dollars: **/
let person = 10 ;
if (person < 3 ) {
    console.log("Entry is free");
    
}else if (person > 3 && person < 12) {
    console.log("Entry fees is  5 dollars");
    
}else if (person > 12 && person < 65) {
    console.log("Entry fees is 10 dollars");   
} else {
    console.log("Entry fees is 7 dollars");
    
}

let isValid = false 
let ans = isValid ? "valid" : "notValid"
console.log(ans);


//  switch statements

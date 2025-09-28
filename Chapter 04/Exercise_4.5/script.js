//========================================================================================================
                  /***  
                   ********************Practice exercise 4.5 ********************
1. Create a variable called prize and use a prompt to ask the user to set the 
value by selecting a number between 0 and 10

 2. Convert the prompt response to a number data type

 3. Create a variable to use for the output message containing the value "My 
Selection: "

 4. Using the switch statement (and creativity), provide a response back 
regarding a prize that is awarded depending on what number is selected

 5. Use the switch break to add combined results for prizes

 6. Output the message back to the user by concatenating your prize variable 
strings and the output message string ***/

//========================================================================================================
let prize = Number(prompt("Select a number between 0 and 10"));

let output = "My Selection";

switch (prize) {
    case 0:
     output += " Won a Gift voucher"   
        break;
    case 1:
     output += " Better Luck ! Next Time"   
        break; 
    case 2:
     output += "  You Got a pen ! Woah"   
        break;  
    case 3:
     output += "  you got 5 rs "   
        break; 
    case 4:
     output += "  Got a brand new watch"   
        break; 
    case 5:
     output += " got a water bottle"   
        break;  
    case 6:
     output += " pencil you got it"   
        break; 
    case 7:
     output += " Have a great day !!! ... You got a surprise"   
        break;  
   case 8:
     output += " GOTACH YOU"    
        break;      
   case 9:
     output += " hehe hahah wahaha !"   
        break;      
   case 10:
     output += " welcome you are welcome ... you won "   
        break;                              

    default:
    output += " invalid Number ! Re- Try Again"    
        break;
}
console.log(output);



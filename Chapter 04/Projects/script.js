//=============================================================================
/**
           ******* Evaluating a number game *******
              Ask the user to enter a number and check whether it's greater than, equal to, or less 
              than a dynamic number value in your code. Output the result to the user.
         **/
//===============================================================================

// let val = Number(prompt("Enter a Number"));
// let num = 100 ;
// if (val > num) {
//     console.log(val + " is greater than  "+ num);

// } else if (val === num) {
//         console.log(val + " Number is equal " + num);

// }else {
//         console.log(val + " is less than "+num);
// }

//====================================================================
/** 
    ******* Friend checker game *******
 Ask the user to enter a name, using the switch statement to return a confirmation 
that the user is a friend if the name selected is known in the case statements. You 
can add a default response that you don't know the person if it's an unknown name. 
Output the result into the console. **/
//====================================================================
// let userName = String(prompt("Enter a name"));
// switch (userName) {
//     case "kitty":
//         console.log("hey this is kitty");
//         break;
//    case "kit":
//         console.log("Hey!  kit");
//         break;
//    case "mew":
//         console.log("Hey!  mew");
//         break;
//    case "meow":
//         console.log("Hey!  meow meow");
//         break;

//     default:
//         console.log("Don't know the person if it's an unknown name");
//          break;
// }

//===============================================================================
/***
                       ******* Rock Paper Scissors game *******
            This is a game between a player and the computer, where both will make a random 
            selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
            using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
            Scissors will beat out Paper. You can use JavaScript to create your own version of 
            this game, applying the logic with an if statement. Since this project is a little more 
            difficult, here are some suggested steps:


        1. Create an array that contains the variables Rock, Paper, and Scissors.

         2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.


        3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array. 

        4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie. 

        5. Use conditions to apply the game logic and return the correct results. 
There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.

        6. Add a new output message that shows the player selection versus the 
computer selection and the result of the game. 
                        ***/
//================================================================================

let array = ["Rock", "Paper", "Scissors"];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

let message = " player " + array[player] + " vs computer " + array[computer] + " ";

if(player === computer) {
    message += "It is a Tie";
}else if (player > computer) {
    if (computer == 0 &&  player == 2) {
    message += "computer Win";    
    }else{
        message += "player win";
    }
}else{
    if (computer == 2 && player == 0) {
        message += "player Wins";
    }else{
        message + "computer Wins" ;
    }
}
console.log(message);

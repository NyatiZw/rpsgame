const options = ['rock', 'paper' , 'scissors'];
console.log(options);

const computerPlay = () =>{
    return options[Math.floor(Math.random()*options.length)]
  }
//console.log("The Computer Chose :" + computerPlay());

//let playerSelection = prompt("Pick a move");
   
const playRound = (playerSelection, computerSelection) =>{
  if (playerSelection === "rock") {
         if (computerSelection === "paper") {
           computerScore++;
           return lose;
        } else if (computerSelection === "rock") {
           return tie;
        } else {
           userScore++;
          return win;
         }
       }
     
       if (playerSelection === "scissors") {
         if (computerSelection === "paper") {
           userScore++;
           return win;
         } else if (computerSelection === "rock") {
           computerScore++;
           return lose;
         } else {
           return tie;
         }
       }
     
       if (playerSelection === "paper") {
         if (computerSelection === "paper") {
           return tie;
         } else if (computerSelection === "rock") {
           userScore++;
           return win;
         } else {
           computerScore++;
           return lose;
         }
       }
}
//console.log(playRound(computerPlay, playerSelection))

  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win"
  let lose = "You lose"
  let tie = "It is a tie"

//console.log(userScore, computerScore);  

  for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }
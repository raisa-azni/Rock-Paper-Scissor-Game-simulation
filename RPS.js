console.log("Rock, Paper, Scissors Game Simulation...");

const getUserChoice = (userInput) => {
  if (
    userInput.toLowerCase() === "rock" ||
    userInput.toLowerCase() === "paper" ||
    userInput.toLowerCase() === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Invalid input");
  }
};

let getComputerChoice = () => {
  const randomComputerChoice = Math.floor(Math.random() * 3);
  switch (randomComputerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userGameChoice, comGameChoice) => {
    if (userGameChoice === comGameChoice) {
    return "tie";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "rock" && comGameChoice === "paper") {
    return "loss";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "rock" && comGameChoice === "scissors") {
    return "win";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "paper" && comGameChoice === "scissors") {
    return "loss";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "paper" && comGameChoice === "rock") {
    return "win";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "scissors" && comGameChoice === "rock") {
    return "loss";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "scissors" && comGameChoice === "paper") {
    return "win";
  } else if (userGameChoice !== comGameChoice && userGameChoice === "bomb") {
    return "win";
  }
};

const playGame = () => {
  if (resultOfGame === "win") {
    console.log("The user has own the game.");
  } else if (resultOfGame === "loss") {
    console.log("The user has lost the game.");
  } else if (resultOfGame === "tie") {
    console.log("The game has been tied.");
  } else {
    console.log("Undefined game result.");
  }
};

console.log(`The users choice is ${getUserChoice('rock')}.`);
let userGameChoice = getUserChoice('rock');
let comGameChoice = getComputerChoice();
console.log(`The computers choice is ${comGameChoice}.`);
//console.log(determineWinner(userGameChoice, comGameChoice));
let resultOfGame = determineWinner(userGameChoice, comGameChoice);
playGame();

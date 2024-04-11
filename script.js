let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserVal = document.querySelector("#user-score");
const compVal = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw! Play again...";
    msg.style.backgroundColor = "#081b31";
    

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        UserVal.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#51f13c";
    } else {
        compScore++;
        compVal.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}


const playGame = (userChoice) => {
     console.log("user choice= ",userChoice);

     const compChoice = genCompChoice();
     console.log("computer choice= ",compChoice);

     if(userChoice === compChoice) {
        drawGame();

     } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
     }

}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
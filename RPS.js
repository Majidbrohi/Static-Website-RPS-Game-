var UserScore = 0;
var CompScore = 0;
var Choices = document.querySelectorAll(".choice");
var msg = document.querySelector(".Info-board");
var UserScorepara = document.querySelector("#Scoreu");
var CompScorepara = document.querySelector("#Scorecomp");
// Generate the computer's choice
var gencompchoice = function () {
    var options = ["Rock", "Paper", "Scissors"];
    var randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};
// Handle a drawn game
var drawGame = function () {
    if (msg) {
        msg.innerText = "Game was drawn. Play again.";
        msg.style.backgroundColor = "darkolivegreen";
    }
};
// Show the winner of the round
var showwinner = function (userWin, Userchoice, CompChoice) {
    if (msg && UserScorepara && CompScorepara) {
        if (userWin) {
            UserScore++;
            UserScorepara.innerText = UserScore.toString();
            msg.innerText = "You win! Your ".concat(Userchoice, " beats ").concat(CompChoice);
            msg.style.backgroundColor = "green";
        }
        else {
            CompScore++;
            CompScorepara.innerText = CompScore.toString();
            msg.innerText = "You lose! ".concat(CompChoice, " beats your ").concat(Userchoice, ".");
            msg.style.backgroundColor = "red";
        }
    }
};
// Play a round of the game
var PlayGame = function (Userchoice) {
    var CompChoice = gencompchoice();
    if (CompChoice === Userchoice) {
        drawGame();
    }
    else {
        var userWin = true;
        if (Userchoice === "Rock") {
            userWin = CompChoice === "Paper" ? false : true;
        }
        else if (Userchoice === "Paper") {
            userWin = CompChoice === "Scissors" ? false : true;
        }
        else {
            userWin = CompChoice === "Rock" ? false : true;
        }
        showwinner(userWin, Userchoice, CompChoice);
    }
};
// Add event listeners to each choice
Choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        var Userchoice = choice.getAttribute("id");
        PlayGame(Userchoice);
    });
});

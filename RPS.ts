let UserScore: number = 0;
let CompScore: number = 0;

const Choices: NodeListOf<Element> = document.querySelectorAll(".choice");
const msg: HTMLElement | null = document.querySelector(".Info-board");

const UserScorepara: HTMLElement | null = document.querySelector("#Scoreu");
const CompScorepara: HTMLElement | null = document.querySelector("#Scorecomp");

// Generate the computer's choice
const gencompchoice = (): "Rock" | "Paper" | "Scissors" => {
    const options: Array<"Rock" | "Paper" | "Scissors"> = ["Rock", "Paper", "Scissors"];
    const randIndex: number = Math.floor(Math.random() * 3);
    return options[randIndex];
};

// Handle a drawn game
const drawGame = (): void => {
    if (msg) {
        msg.innerText = "Game was drawn. Play again.";
        msg.style.backgroundColor = "darkolivegreen";
    }
};

// Show the winner of the round
const showwinner = (userWin: boolean, Userchoice: "Rock" | "Paper" | "Scissors", CompChoice: "Rock" | "Paper" | "Scissors"): void => {
    if (msg && UserScorepara && CompScorepara) {
        if (userWin) {
            UserScore++;
            UserScorepara.innerText = UserScore.toString();
            msg.innerText = `You win! Your ${Userchoice} beats ${CompChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            CompScore++;
            CompScorepara.innerText = CompScore.toString();
            msg.innerText = `You lose! ${CompChoice} beats your ${Userchoice}.`;
            msg.style.backgroundColor = "red";
        }
    }
};

// Play a round of the game
const PlayGame = (Userchoice: "Rock" | "Paper" | "Scissors"): void => {
    const CompChoice: "Rock" | "Paper" | "Scissors" = gencompchoice();

    if (CompChoice === Userchoice) {
        drawGame();
    } else {
        let userWin: boolean = true;

        if (Userchoice === "Rock") {
            userWin = CompChoice === "Paper" ? false : true;
        } else if (Userchoice === "Paper") {
            userWin = CompChoice === "Scissors" ? false : true;
        } else {
            userWin = CompChoice === "Rock" ? false : true;
        }

        showwinner(userWin, Userchoice, CompChoice);
    }
};

// Add event listeners to each choice
Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id") as "Rock" | "Paper" | "Scissors";
        PlayGame(Userchoice);
    });
});

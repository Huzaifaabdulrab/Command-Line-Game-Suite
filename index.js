#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNum = Math.floor(Math.random() * 1000);
let YourEmail = '';
async function playGame() {
    let condition = false;
    while (!condition) {
        const userNameInput = await inquirer.prompt({
            name: "name",
            message: chalk.yellowBright("Please Enter Your Name & make sure your name 1st work is capital: "),
            type: "input"
        });
        let name = userNameInput.name.trim();
        if (!isNaN(Number(name))) {
            console.log(chalk.redBright("Please enter a valid name."));
        }
        else if (name === "") {
            console.log(chalk.redBright("Invalid input, please enter your name."));
        }
        else if (userNameInput.name == userNameInput.name.charAt(0).toUpperCase() + userNameInput.name.slice(1).toLowerCase()) {
            YourEmail = `${userNameInput.name}${randomNum}@gmail.com`;
            console.log(chalk.greenBright(`\nGenerated Email Address: ${chalk.blueBright(YourEmail)}`));
            condition = true;
        }
        else {
            console.log(chalk.redBright("Invalid input, please ensure the first letter of your name is capitalized."));
        }
        console.log(); // Adding a white space
    }
    let conditionCode = false;
    let YourCode = '';
    while (!conditionCode) {
        const userGeneratedCode = await inquirer.prompt({
            name: "userGenerateCode",
            type: "input",
            message: chalk.bold("Please Generate a Code : ")
        });
        const userEnteredCode = await inquirer.prompt({
            name: "userCode",
            type: "input",
            message: chalk.gray.bold("Please Enter a code to your generate & Login to your account : ")
        });
        if (userGeneratedCode.userGenerateCode == userEnteredCode.userCode) {
            console.log(chalk.cyanBright(`\nYour Code is correct ${userEnteredCode.userCode}`));
            conditionCode = true;
            YourCode = userEnteredCode.userCode;
        }
        else {
            console.log(chalk.red(`Code is not correct because you generated ${userGeneratedCode.userGenerateCode}.`));
        }
        console.log(); // Adding a white space
    }
    let verifyCond = false;
    while (!verifyCond) {
        const randomNum2 = Math.floor(Math.random() * 10000);
        console.log(chalk.underline(`\nVerification Code : ${randomNum2}`));
        const verifyCode = await inquirer.prompt({
            name: "verifyCode",
            message: chalk.bold("Please enter a verification code"),
            type: "input"
        });
        if (verifyCode.verifyCode == randomNum2) {
            console.log(chalk.blueBright("\nCongratulations! Welcome to the Account."));
            console.log(chalk.grey("\nHere are your details. Please save them."));
            const user = {
                YourEmail,
                YourCode
            };
            console.log(user);
            verifyCond = true;
        }
        else {
            console.log(chalk.red.overline("\nInvalid Code"));
        }
        console.log(); // Adding a white space
    }
    const gamesList = await inquirer.prompt({
        name: "games",
        message: chalk.white.bgMagenta("These games are Available"),
        type: "list",
        choices: ["number-Guessing Game", "Star making game", "Head or Tails", "Quit"]
    });
    if (gamesList.games === "Quit") {
        console.log(chalk.yellow("Thank you for playing! Goodbye!"));
        return;
    }
    let gameCompleted = false;
    while (!gameCompleted) {
        if (gamesList.games === "number-Guessing Game") {
            let numGuessCode = 1122;
            let gameCodeCondition = false;
            while (!gameCodeCondition) {
                console.log("NumberGuessing-game Code" + numGuessCode);
                let numGuess = await inquirer.prompt({
                    name: "codeGame1",
                    type: 'input',
                    message: chalk.white.bold("Please enter this code")
                });
                if (numGuess.codeGame1 == numGuessCode) {
                    gameCodeCondition = true;
                }
                else {
                    console.log(chalk.white.bgRed("Enter correct Code"));
                }
                console.log(); // Adding a white space
            }
            let gameCondition = false;
            while (!gameCondition) {
                let numGame = Math.floor(Math.random() * 10 + 1);
                const numGuessGame = await inquirer.prompt({
                    name: "game",
                    message: chalk.white.bold("Please Guess a number 1 to 10"),
                    type: "input"
                });
                if (numGuessGame.game == numGame.toString()) {
                    console.log(chalk.white.bgGreen("Congratulations! You guessed the correct number."));
                    gameCondition = true;
                }
                else {
                    console.log(chalk.white.bgRed(`Please try again. The number is ${numGame}`));
                }
                console.log(); // Adding a white space
            }
        }
        if (gamesList.games === "Star making game") {
            let pyramidGameCode = 3344;
            let gameCodeCondition2 = false;
            while (!gameCodeCondition2) {
                console.log("Pyramid-game Code" + pyramidGameCode);
                let pyramidGame = await inquirer.prompt({
                    name: "pGame",
                    type: 'input',
                    message: chalk.white.bold("Please enter this code")
                });
                if (pyramidGame.pGame == pyramidGameCode.toString()) {
                    gameCodeCondition2 = true;
                    const starGame = await inquirer.prompt({
                        name: "pyramidGame",
                        type: "input",
                        message: chalk.white.bold("How many rows of Star Pyramid would you like to create?")
                    });
                    const n = parseInt(starGame.pyramidGame);
                    if (!isNaN(n) && n > 0) {
                        let a = "";
                        for (let i = 1; i <= n; i++) {
                            for (let j = 1; j <= i; j++) {
                                a += "*";
                            }
                            a += "\n";
                        }
                        console.log(chalk.white.bgBlue(a));
                    }
                    else {
                        console.log(chalk.white.bgRed("Invalid input. Please enter a valid positive number."));
                    }
                }
                else {
                    console.log(chalk.white.bgRed("Please enter a correct password"));
                }
                console.log(); // Adding a white space
            }
        }
        if (gamesList.games === "Head or Tails") {
            let head_tailCode = 5566;
            let gameCodeCondition3 = false;
            while (!gameCodeCondition3) {
                console.log("Head or Tails game code " + head_tailCode);
                let hTcode = await inquirer.prompt({
                    name: "headTcode",
                    type: "input",
                    message: chalk.white.bold("Please enter this code")
                });
                if (hTcode.headTcode == head_tailCode) {
                    gameCodeCondition3 = true;
                }
                else {
                    console.log(chalk.white.bgRed("Enter a correct code "));
                }
                console.log(); // Adding a white space
            }
            let gameCondition3 = false;
            while (!gameCondition3) {
                let head_tailsGame = await inquirer.prompt({
                    name: "choices",
                    type: "list",
                    message: chalk.white.bold("Choose Head or Tails"),
                    choices: ["Head", "Tails"]
                });
                let randomNum = Math.floor(Math.random() * 2);
                let result;
                if (randomNum === 0) {
                    result = "Head";
                }
                else {
                    result = "Tails";
                }
                console.log(chalk.white.bgYellow(`The result is ${result}`));
                if (head_tailsGame.choices === result) {
                    console.log(chalk.white.bgGreen("Congratulations! You win! "));
                    gameCondition3 = true;
                }
                else {
                    console.log(chalk.white.bgRed("Oops! Better luck next time!"));
                }
                console.log(); // Adding a white space
            }
        }
        const playAgain = await inquirer.prompt({
            name: "again",
            message: "Do you want to play another game?",
            type: "confirm"
        });
        if (!playAgain.again) {
            gameCompleted = true;
            console.log(chalk.yellow("Thank you for playing! Goodbye!"));
        }
    }
}
playGame();

// to generate a random number :
let randomNumber = parseInt(Math.random() * 100 + 1);

// select all the elements which you want :
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p'); // create an element to show some text after result

let prevGuess = []; // to store all previous guesses
let numGuess = 1; // to track guesses
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

// first we validate the guesses :
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over... Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

//  after validate we check guesses :
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low...`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high...`);
    }
}

// after checking the guess we display the guesses to user:
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remainingSlot.innerHTML = `${11 - numGuess}`;
}

// after all of these we display a final message to the user:
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// to end game:
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    para.classList.add('button');
    para.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
}

// to start a new game:
function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainingSlot.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(para);
        playGame = true;
    })
}
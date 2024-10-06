'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😍Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)
// console.log(Math.random())

let secretNumber = Math.trunc(Math.random() * 50) + 1;
// console.log(secretNumber)
let score = 10;
let bestscore = 0

// document.querySelector('h1').textContent = 'hello'

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    //no input
    if (!guess) {
        // document.querySelector('.message').textContent = '😥No Number'
        displayMessage('🚫No Number')
    }
    //when win
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '😀Correct answer!!';
        displayMessage('🏆Correct answer!!')
        document.querySelector('.number').textContent = secretNumber;
        //styling win
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if (score > bestscore) {
            bestscore = score;
            document.querySelector('.bestscore').textContent = bestscore
        }
    }

    //when guess is wrong
    else if (guess != secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high⬆️' : document.querySelector('.message').textContent = 'Too low⬇️';
            score--;
            displayMessage(guess > secretNumber ? 'Too high⬆️' : 'Too low⬇️')

            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = 'You Lost';
            displayMessage('💀You Lost')
            document.querySelector('body').style.backgroundColor = '#A3250C';
            document.querySelector('.number').textContent = secretNumber;
        }
    }

    //when guess high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high⬆️';
    //         score--;

    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lost';
    //     }

    // }
    //when guess low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low⬇️';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lost';
    //     }
    // }
}
)

document.querySelector('.again').addEventListener('click', function () {
    score = 10
    secretNumber = Math.trunc(Math.random() * 50) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})


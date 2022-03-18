'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc is used for making numbers without decimals
let score = 20;
let highscore = 0;

//increment button
document.querySelector('.inc').addEventListener('click', function () {
  let inc = Number(document.querySelector('.guess').value);
  if(inc<20)inc = inc + 1;
  document.querySelector('.guess').value = inc;

});

//decrement button
document.querySelector('.dec').addEventListener('click', function () {
  let dec = Number(document.querySelector('.guess').value);
  if (dec > 0) {
    dec = dec - 1;
  }
  document.querySelector('.guess').value = dec;

});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess < 0 || !guess || guess > 20) {
    document.querySelector('.message').textContent = '⛔ NO number';
    document.querySelector('.guess').value = '';
    
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '💯 correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').classList.add('width')

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high ' : '📉 Too low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game ';

      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game ';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low ';

  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game ';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing ... ';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = 'black'; // .style for css modification

  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?'
});

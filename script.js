'use strict';
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secret_number);
  console.log(guess, typeof guess);

  //
  //
  // If Player enterd 0 or didnt enter
  if (!guess) {
    document.querySelector('.message').textContent =
      'Pls Enter The Number Between 1 to 20😊😊';
  }
  //
  //
  // if player wins
  else if (guess === secret_number) {
    document.querySelector('.message').textContent =
      'Correct Number!!..🎉🎉🎉🎇';
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //
  //
  // if guess is nearer to secret number
  else if (guess == secret_number + 1 || guess == secret_number - 1) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😯Too Close';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😔You Have Lost The Game!!.';
      document.querySelector('body').style.backgroundColor = '#A52A2A';
      document.querySelector('.number').textContent = secret_number;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }
  }
  //
  //
  // if guess is not equal
  else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret_number ? '😬Too High' : '🤭Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😔You Have Lost The Game!!.';
      document.querySelector('body').style.backgroundColor = '#A52A2A';
      document.querySelector('.number').textContent = secret_number;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing!!..😈';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

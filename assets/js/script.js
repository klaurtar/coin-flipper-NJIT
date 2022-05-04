// TODO: Declare any global variables we need

// This is just a sanity check to make sure your JavaScript script is getting loaded
// You can remove it once you see it in your browser console in the developer tools

// TODO: Add event listener and handler for flip and clear buttons

// Flip Button Click Handler
// TODO: Determine flip outcome
// TODO: Update image and status message in the DOM

// Update the scorboard
// TODO: Calculate the total number of rolls/flips
// Make variables to track the percentages of heads and tails
// TODO: Use the calculated total to calculate the percentages
// HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
// TODO: Update the display of each table cell

// Clear Button Click Handler
// TODO: Reset global variables to 0
// TODO: Update the scoreboard (same logic as in flip button click handler)

// IIFE
(function () {
  // select all of my elements (hungarian notation $)
  const $flipButton = document.querySelector('#flip');
  const $clearButton = document.querySelector('#clear');
  const $pennyImage = document.querySelector('#penny-image');
  const $message = document.querySelector('#message');
  const $headsValue = document.querySelector('#heads');
  const $headsPercent = document.querySelector('#heads-percent');
  const $tailsValue = document.querySelector('#tails');
  const $tailsPercent = document.querySelector('#tails-percent');

  let scoreBoard = {
    heads: 0,
    percentageHeads: 0,
    tails: 0,
    percentageTails: 0,
    totalFlips: 0,
  };

  function changeScoreBoardNumbers() {
    $headsValue.textContent = `${scoreBoard.heads}`;
    $headsPercent.textContent = `${Math.round(scoreBoard.percentageHeads)}%`;
    $tailsValue.textContent = `${scoreBoard.tails}`;
    $tailsPercent.textContent = `${Math.round(scoreBoard.percentageTails)}%`;
  }

  function calculateScorePercentages() {
    scoreBoard.percentageHeads =
      (scoreBoard.heads / scoreBoard.totalFlips) * 100;
    scoreBoard.percentageTails =
      (scoreBoard.tails / scoreBoard.totalFlips) * 100;
  }

  function handleFlipButtonClick() {
    // figure out if we flipped heads or tails
    const headsOrTails = Math.random() < 0.5;

    // if we flipped heads... do this
    if (headsOrTails) {
      // total flips increases by 1
      scoreBoard.totalFlips += 1;
      // number of heads to increase by 1
      scoreBoard.heads += 1;
      // percentage heads to increase
      calculateScorePercentages();
      // penny image to show heads
      $pennyImage.setAttribute('src', 'assets/images/penny-heads.jpg');
      // change the message to say you flipped heads
      $message.textContent = 'You Flipped Heads!';

      changeScoreBoardNumbers();
    } else {
      // if we flipped tails... do this
      // total flips increases by 1
      scoreBoard.totalFlips += 1;
      // number of tails to increase by 1
      scoreBoard.tails += 1;
      // percentage tails to increase
      calculateScorePercentages();
      // penny image to show tails
      $pennyImage.setAttribute('src', 'assets/images/penny-tails.jpg');
      // change the message to say you flipped tails
      $message.textContent = 'You Flipped Tails!';

      changeScoreBoardNumbers();
    }
  }

  function handleClearButtonClick() {
    // clear the scoreboard
    scoreBoard = {
      heads: 0,
      percentageHeads: 0,
      tails: 0,
      percentageTails: 0,
      totalFlips: 0,
    };
    // make sure the HTML shows all 0's
    changeScoreBoardNumbers();

    // change the message to say 'Let's Get Rolling!'
    $message.textContent = `Let's Get Rolling!`;
  }

  function setUpEventListeners() {
    // listen for clicks on my buttons
    $flipButton.addEventListener('click', function () {
      handleFlipButtonClick();
    });

    $clearButton.addEventListener('click', function () {
      handleClearButtonClick();
    });
  }

  function init() {
    // setup event listeners for the buttons
    setUpEventListeners();
  }

  init();
})();

// Wait for dom to load then run the game
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-type" === "submit")) {
        alert("you clicked submit");
      } else {
        let gameType = button.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  });
});

function runGame() {}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}
function displaySubtractQuestion() {}
function displayMultiplyQuestion() {}
function displayDivisiongQuestion() {}

// Wait for dom to load then run the game
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-type" === "submit")) {
        alert("you clicked submit");
      } else {
        let gameType = button.getAttribute("data-type");
        runGame(`${gameType}`);
      }
    });
  });
});
/** The main game "loop  called when the script is first loaded"
 * and after the users' answer proceeds
 */
function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting`;
  }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
  document.querySelector(".operand1").textContent = operand1;
  document.querySelector(".operand2").textContent = operand2;
  let operator = (document.querySelector(".operator").textContent = "+");
  console.log(operand1, "op1");
  console.log(operand2, "op2");
  console.log(operator, "operator");
}
function displaySubtractQuestion() {}
function displayMultiplyQuestion() {}
function displayDivisiongQuestion() {}

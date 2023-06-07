// Wait for dom to load then run the game
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-type" === "submit")) {
        checkAnswer();
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
  } else if (gameType === "subtraction") {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "divide") {
    displayDivideQuestion(num1, num2);
  } else if (gameType === "submit") {
    checkAnswer();
  } else {
    alert(`unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting`;
  }
}

function checkAnswer() {
  let userAnswer = parseInt(document.querySelector(".answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];
  if (isCorrect) {
    alert("Hey! you got it right! :D");
    incrementScore();
  } else {
    alert(
      `Awh you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`
    );
    incrementWrongAnswer();
  }
  runGame(calculatedAnswer[1]);
}

function clearAnswerBox() {
  document.querySelector(".answer-box").value = "";
}

function calculateCorrectAnswer() {
  let operand1 = parseInt(document.querySelector(".operand1").innerText);
  let operand2 = parseInt(document.querySelector(".operand2").innerText);
  let operator = document.querySelector(".operator").innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if (operator === "-") {
    return [operand1 - operand2, "subtraction"];
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else if (operator === "/") {
    return [operand1 / operand2, "divide"];
  } else {
    alert(`Unimplemented opertator ${operator}`);
    throw `Unimplemented opertator ${operator}.Aborting`;
  }
}

function incrementScore() {
  let oldCorrectScore = parseInt(
    document.querySelector(".correct-answer-span").innerText
  );

  document.querySelector(".correct-answer-span").innerText = ++oldCorrectScore;
}

function incrementWrongAnswer() {
  let oldInCorrectScore = parseInt(
    document.querySelector(".incorrect-answer-span").innerText
  );
  document.querySelector(".incorrect-answer-span").innerText =
    ++oldInCorrectScore;
}

function displayAdditionQuestion(operand1, operand2) {
  document.querySelector(".operand1").textContent = operand1;
  document.querySelector(".operand2").textContent = operand2;
  let operator = (document.querySelector(".operator").textContent = "+");
  clearAnswerBox();
}
function displaySubtractQuestion(operand1, operand2) {
  document.querySelector(".operand1").textContent = operand1;
  document.querySelector(".operand2").textContent = operand2;
  let operator = (document.querySelector(".operator").textContent = "-");
  clearAnswerBox();
}
function displayMultiplyQuestion(operand1, operand2) {
  document.querySelector(".operand1").textContent = operand1;
  document.querySelector(".operand2").textContent = operand2;
  let operator = (document.querySelector(".operator").textContent = "x");
  clearAnswerBox();
}
function displayDivideQuestion(operand1, operand2) {
  document.querySelector(".operand1").textContent = operand1;
  document.querySelector(".operand2").textContent = operand2;
  let operator = (document.querySelector(".operator").textContent = "/");
  clearAnswerBox();
}

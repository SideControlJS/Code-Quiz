
//Make objects of each question that contains question text, array of answer choices,
//and add associate each question with its correct answer.
var codeQuestions = [
  {
      question: "JavaScript Question Placeholder",
      choices: ["choice0", "choice1", "choice2", "choice3"],
      correctAnswerIndex: 3
  },
  {
      question: "JavaScript Question Placeholder",
      choices: ["choice0", "choice1", "choice2", "choice3"],
      correctAnswerIndex: 1
  },
  {
      question: "JavaScript Question Placeholder",
      choices: ["choice0", "choice1", "choice2", "choice3"],
      correctAnswerIndex: 2
  },
  {
      question: "JavaScript Question Placeholder",
      choices: ["choice0", "choice1", "choice2", "choice3"],
      correctAnswerIndex: 3
  },
];



//Event Listener using "DOMContentLoaded" to trigger showing the start-card and hiding the rest upon loading of the page
document.addEventListener("DOMContentLoaded", function() {
  //Set up variable to keep track of the current question index
  //and another variable to store the user's score.
  var currentQuestionIndex = 0;
  var userScore = 0;
  var timer;
  var timeRemaining = 60;

  //Function to start quiz
  function startQuiz() {
    //hide start card
    document.getElementById("start-card").setAttribute("hidden", "true");
    //show question card
    showQuestion();
    //start timer
    timer = setInterval(function () {
      timeRemaining--;
      document.getElementById("time").textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

  //defining 'showQuestion' function from above
  function showQuestion() {
    //get current question for CodeQuestions array
    var currentQuestion = codeQuestions[currentQuestionIndex];
   //update question and answer choices 
    document.getElementById("question-text").textContent = currentQuestion.question;
    var choiceButtons = document.querySelectorAll(".choice-btn");

    for (var i = 0; i < currentQuestion.choices.length; i++) {
      choiceButtons[i].textContent = currentQuestion.choices[i];
    }

  //show the question card and hide others
  document.getElementById("question-card").removeAttribute("hidden");
}

  //Function to check answers
  function checkAnswer(event) {
    var selectedChoice = event.target.textContent;
    var currentQuestion = codeQuestions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.choices[currentQuestion.correctAnswerIndex]) {
      userScore++;
      showResult("Correct!", "result-correct");
    } else {
      timeRemaining -= 10; //penalty wrong answer
      showResult("Wrong!", "result-wrong");
    }

    //move to next question
    currentQuestionIndex++;
    if (currentQuestionIndex < codeQuestions.length) {
      showQuestion();
    }
  }

//display correct/wrong
  function showResult(resultText, resultClass) {
    var resultCard = document.getElementById("result-card");
    resultCard.textContent = resultText;
    resultCard.className = "card" + resultClass;

    setTimeout(function () {
      resultCard.textContent = "";
      resultCard.className = "card";
    }, 1000);
}

//function to end quiz/display final score
function endQuiz() {
  clearInterval(timer);
  document.getElementById("question-card").setAttribute("hidden", "true");
  document.getElementById("score").textContent = userScore;
  document.getElementById("score-card").removeAttribute("hidden");
}

//function for form submittion
function submitHighScores(event) {
  event.preventDefault();
  var intialsInput = document.getElementById("initials").value;

  //save score and initials
  localStorage.setItem("highScore", JSON.stringify(userScore));
  localStorage.setItem("initials", initialsInput);
  goToStartCard();
}

//Go back to start 
function goToStartCard() {
  currentQuestionIndex = 0;
  userScore = 0;
  timeRemaining = 60;
  document.getElementById("score-card").setAttribute("hidden", "true")
  document.getElementById("start-card").removeAttribute("hidden");
}

//Event listenter to start the quiz when the 'Start Quiz!' button is pressed
document.getElementById("start-btn").addEventListener("click", startQuiz);

//Event listener for user answers
document.getElementById("answer-choices").addEventListener("click", function(event) {
  if (event.target.matches(".choice-btn")){
    checkAnswer(event);
  }
});

document.getElementById("submission-form").addEventListener("submit", submitHighScores);
});



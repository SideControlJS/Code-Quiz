
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
    userScore = 0;
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
    event.stopPropagation();
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
    } else {
      endQuiz();
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
  var initialsInput = document.getElementById("initials").value;
  var highScore = JSON.parse(localStorage.getItem("highScore"));

  if (!highScore || userScore > highScore.score) {
    highScore = {score: userScore, initials: initialsInput};
    localStorage.setItem("highScore", JSON.stringify(highScore));
  }

  showLeaderboard();
}

//Show Leaderboard
function showLeaderboard() {
  document.getElementById("start-card").setAttribute("hidden", "true");
  document.getElementById("question-card").setAttribute("hidden", "true");
  document.getElementById("result-card").setAttribute("hidden", "true");
  document.getElementById("score-card").setAttribute("hidden", "true");
  document.getElementById("leaderboard-card").removeAttribute("hidden");

  //retrieve high score
  var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
  //sort scores high to low
  highScore.sort(function(a, b) {
    return b.score - a.score;
  });

  var leaderboardList = document.getElementById("leaderboard-list");
  leaderboardList.innerHTML = "";

  //display high scores
  for (var i = 0; i < highScore.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = highScore[i].initials + " - " + highScore[i].score;
    leaderboardList.appendChild(listItem);
  }
}




//Event listenter to start the quiz when the 'Start Quiz!' button is pressed
document.getElementById("start-btn").addEventListener("click", startQuiz);

//Event listener for user answers
document.getElementById("answer-choices").addEventListener("click", function(event) {
  if (event.target.matches(".choice-btn")){
    checkAnswer(event);
  }
});

var choiceButtons = document.querySelectorAll(".choice-btn");
for (var i=0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", checkAnswer);
}

//submission form event listener
document.getElementById("submission-form").addEventListener("submit", submitHighScores);
});


//view high scores event listener
document.getElementById("highscore-link").addEventListener("click", showLeaderboard);


//go back button event listener
document.getElementById("back-btn").addEventListener("click", function() {
  document.getElementById("leaderboard-card").setAttribute("hidden", "true");
  document.getElementById("start-card").removeAttribute("hidden");
});

//clear highscore event listener
document.getElementById("clear-btn").addEventListener("click", function() {
  localStorage.removeItem("highScore");
  var leaderboardList = document.getElementById("leaderboard-list");
  leaderboardList.innerHTML = "";
});



//NOTES & EXAMPLES

//TRAVERSE DOM LESSON
// Accessing element by id 
/*var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

// Setting style of element
firstChildUl.style.color = "green";


// Access multiple elements using .querySelectorAll()
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

// Access element by ID using .querySelector()
 var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
 pTags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
 imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }

 // CREATE-APPEND LESSON
 // Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}


//TIMERS-INTERVALS LESSON 
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();


//EVENT-LISTENER LESSON
// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
*/




//Make objects of each question that contains question text, array of answer choices,
//and add associate each question with its correct answer.
var codeQuestions = [
    {
        question: "JavaScript Question Placeholder",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: 3
    },
    {
        question: "JavaScript Question Placeholder",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: 3
    },
    {
        question: "JavaScript Question Placeholder",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: 3
    },
    {
        question: "JavaScript Question Placeholder",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: 3
    },
];

//Set up variable to keep track of the current question index
//and another variable to store the user's score.
var currentQuestion = 0;
var userScore = 0;

//Add a function to display the next question when the user
//clicks the start button or answers a question.
function displayQuestion()


//Add an event listener to the start button so that when it's clicked it 
//triggers the display of the first question and starts the timer.



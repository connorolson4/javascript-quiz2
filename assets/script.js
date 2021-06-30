// TODO: Set up timer
// timer needs set interval so that we have a function timer that counts down, that we can decrement if the user gets a wrong answer.
// set timer so it runs at start of the game
// make sure game ends at 0 seconds

// TODO: Set up high scores page
// user and their score needs to be saved in local storage
// [{user: name, score: 10}] each time we pull the information from local storage we set our highscores to either the info there || []
// hide user input screen and show the high scores to the user and ask them if they want to take quiz again.


// FUNCTIONS

function buildQuiz(){

      const output = [];
      
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  

          const answers = [];
  

          for(letter in currentQuestion.answers){
  
      
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
     
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
    
      quizContainer.innerHTML = output.join('');
    };

function startClock(){
      
      setInterval(function(){
        time--;
        console.log(time);
        timer.textContent=time;
        if(time===0){
          alert("Quiz is finished")
        }
      },1000)
    };

function showResults(){
  
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
     
      let numCorrect = 0;
  
     
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
       
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      
        if(userAnswer === currentQuestion.correctAnswer){
    
          numCorrect++;
  
        
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        
        else{
         
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    };
  
function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    };
  
function showNextSlide() {
      showSlide(currentSlide + 1);
    };
  
function showPreviousSlide() {
      showSlide(currentSlide - 1);
    };

// VARIABLES
const timer = document.getElementById("timer");
const start = document.getElementById('start');
start.addEventListener("click", startClock);
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// timer variables
const progress = document.getElementById('progress');
// high score variables
const scoreDiv = document.getAnimations('scoreContainer');
const myQuestions = [
      {
        question: "Which is not a site for learning how to code?",
        answers: {
          a: "Codecademy",
          b: "W3 Schools",
          c: "Coding Nut Jobs",
          d: "Khan Academy"
        },
        correctAnswer: "c"
      },
      {
        question: "Which of these do devs use to store their code online?",
        answers: {
          a: "GitHub",
          b: "GitUniverse",
          c: "GitSpot",
          d: "GitWorld"
        },
        correctAnswer: "a"
      },
      {
        question: "What shortcut can you use to begin the basic structure of an HTML file?",
        answers: {
          a: "Ctrl + !",
          b: "< and then hit enter",
          c: "! and then hit enter",
          d: "HTML and hit enter"
        },
        correctAnswer: "c"
      }
    ];

let time = myQuestions.length*15;
let score = 0;

buildQuiz();
  

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
  

submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
 
/**
 * Example store structure
 */

'use strict';

function generateQuestion() { }

// render Question No. 2
// values needed:
//    STORE.quizStarted = true
//    STORE.questionNumber = 2  (we will -1 to read first question)
// To Do:
//    Replace  @QUESTION_TEXT
//    Replace  @ANSWER_ONE ... _FOUR
//    Replace


function renderPage() {
  // Refer back to STORE.questionNumber
  // Before the quiz starts, render first start page
  if (STORE.quizStarted === false) {
    $('.js-render-page-here').html(pageTemplates[0].content);
    // If STORE.questionNumber is within question range, render question page
  } else if (STORE.questionNumber < STORE.questions.length) {
    //call generateQuestion here
    $('.js-render-page-here').html(pageTemplates[1].content);
  } else {
    // if store.currentQuestion === store.questions.length
    $('.js-render-page-here').html(pageTemplates[2].content);
  }
}

function main() {
  beginQuiz();
  //checkAnswer();  
}

// $('#start').on('click', function (evt){
//   evt.preventDefault();
  
//   beginQuiz();
  
// });

//Will take to first question of Quiz - from front or results page
function beginQuiz() {
  renderPage();
  $('#progress').on('click', function (evt) {
    evt.preventDefault();
    if(STORE.quizStarted === false){
    STORE.quizStarted = true;
    STORE.questionNumber++;    
    renderPage();
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    }else if(STORE.questionNumber < STORE.questions.length){
      STORE.questionNumber++;    
    renderPage();
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    }
  });  
}

// function checkAnswer() {
//   renderPage();
//   $('#progress').on('click', function (evt) {
//     evt.preventDefault();    
//     STORE.questionNumber++;    
//     renderPage();
//     console.log(STORE.questionNumber);
//     console.log(STORE.quizStarted);
//   });
// }
// // Will check answer and increment counter
// function checkAnswer() {
//   $('#checkAnswer').on('click', function (evt) {
//     evt.preventDefault();
//     console.log(counter);
//     STORE.questionNumber++;
//     console.log(counter);
//     renderPage();
//   });
// }


//function goBack() { }


$(main);

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
/**
 * Example store structure
 */

'use strict';

function generateQuestions() {
  let question = STORE.questions[STORE.currentQuestion];
  return pageTemplates[1].content;
}

function generateStartPage() {
  return pageTemplates[0].content;
}

function generateResultsPage() {
  return pageTemplates[2].content;
}

function renderer() {
  if (STORE.questionNumber < STORE.questions.length) {
    let html = generateQuestions();
    $('main').html(html);
    clickerTwo();
  } else {
    let html = generateResultsPage();
    $('main').html(html);
    clickerThree();
  }
}

function main() {
  let startPage = generateStartPage();
  $('main').html(startPage);
  clicker();
};

function submitAnswer(event) {
  event.preventDefault();
  let answer = $('input[name=answers]:checked').val();
  if(STORE.questions[STORE.currentQuestion].correctAnswer == answer){
    alert('You are right!');
  } else {
    alert('You are wrong!')
  }
  STORE.questionNumber++;
  renderer();
}

function completeItem() {
  console.log($(this).parent());
  alert('you are done');
  renderer();
}

function clicker(){
  $('.begin').click(function(){
    console.log('oink');
    STORE.quizStarted = true;
    STORE.questionNumber++
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

function clickerTwo(){
  $('.progress').click(function(){
    console.log('oink');
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

function clickerThree(){
  $('.restart').click(function(){
    console.log('oink');
    STORE.questionNumber=1;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

$(main);

/*
function renderStart() {
  $('.js-render-page-here').replaceWith(pageTemplates[0].content);
}

function renderQuestions() {
  console.log('i hear u');
  $('.js-render-page-here').replaceWith(pageTemplates[1].content);
  console.log(pageTemplates[1].content)
}

function renderResults() {
  $('.js-render-page-here').replaceWith(pageTemplates[3].content);
}

$(main);
*/

/* pure suffering
function renderStart() {
  $('.js-render-page-here').html(pageTemplates[0].content);
}

//leave this to Jeff's magic
function renderQuestions() {
  if (STORE.questionNumber < 6) {
    $('.js-render-page-here').replaceWith(pageTemplates[1].content);
    progressQuiz();
  }
};

function renderFinalQ() {
  $('.js-render-page-here').replaceWith(pageTemplates[2].content);
  endQuiz();
}

function renderResults() {
  $('.js-render-page-here').replaceWith(pageTemplates[3].content);
};

function main() {
  renderStart();
  beginQuiz();
  //renderQuestions();
  //renderFinalQ();
  //renderResults();
  //endQuiz();
}

//Will take to first question of Quiz
function beginQuiz() {
  $('#begin').on('click', function (evt) {
    evt.preventDefault();
    STORE.quizStarted = true;
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderQuestions();
  });
}

function progressQuiz() {
  $('#progress').on('click', function (evt) {
    evt.preventDefault();
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderQuestions();
  });
};

function endQuiz() {
  $('#finish').on('click', function (evt) {
    evt.preventDefault();
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderResults();
  })
};

$(main);
*/



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
'use strict';

function generateQuestions() {
  let question = STORE.questions[STORE.questionNumber-1];
  //This displays the quiz questions
  return `<h2>Question ${STORE.questionNumber}<h2>   
  <form>
      <p>${question.question}</p>
          <input id='answer_1' name="answers" type='radio' value=${question.answers[0]}>
            <label for='answer_1'>${question.answers[0]}</label><br>
          <input id='answer_2' name="answers" type='radio' value=${question.answers[1]}>
            <label for='answer_2'>${question.answers[1]}</label><br>
          <input id='answer_3' name="answers" type='radio' value=${question.answers[2]}>
            <label for='answer_3'>${question.answers[2]}</label><br>
          <input id='answer_4' name="answers" type='radio' value=${question.answers[3]}>
            <label for='answer_4'>${question.answers[3]}</label><br>                       
    </form>
    <button type='submit' class='quizProgress'>Submit</button>
  <footer class='ticker'>
      <p class='progress'>${STORE.questionNumber} of ${STORE.questions.length}</p>
      <p class='scoreCount'>${STORE.score} correct, ${STORE.questionNumber - STORE.score-1} incorrect.</p>
  </footer>`;
}

function generateStartPage() {
  //This displays the quiz introduction
  return  `<p>  
  Created by Jeffrey Chodil and Steven Henderson</p><p>So begins the quiz. Test your knowledge by pressing the start button below</p>
  <img class='legend' src="images/beethoven-guitar-resize.jpg" alt="Beethoven Challenges You!"/><br>
<button class='begin'>Start Quiz</button>`;
}

function generateResultsPage() {
  //This displays the quiz results
  let trophy = '';
  switch(STORE.score) {
    case 0: trophy = `<img src="images/trophy-zero-correct.jpg" alt="Too bad, so sad!"/><p>Too bad, so sad!</p>`;
    break;
    case 1: trophy = `<img src="images/trophy-one-correct.jpg" alt="Better luck next time!"/><p>Better luck next time!</p>`;
    break;
    case 2: trophy = `<img src="images/trophy-two-correct.jpg" alt="Room for Improvement!"/><p>Room for Improvement!</p>`;
    break;
    case 3: trophy = `<img src="images/trophy-three-correct.jpg" alt="Not bad!"/><p>Not bad!</p>`;
    break;
    case 4: trophy = `<img src="images/trophy-four-correct.jpg" alt="Pretty good!"/><p>Pretty good!</p>`;
    break;
    case 5: trophy = `<img src="images/trophy-five-correct.jpg" alt="Great job!"/><p>Great job!</p>`;
    break;
    case 6: trophy = `<img src="images/trophy-all-correct.jpg" alt="Outta this world!"/><p>Cosmic brain! Outta this world!</p>`;
    break;
  }
  return   `<h2>Results</h2>
  <h2 class='scoreResult'> </h2>  
  <p class='scoreBoard'>${STORE.score} Correct!</p>
  <div class='trophy'>${trophy}</div>
  <button class='restart'>Restart Quiz</button>`;
}

function renderer() {
  if(STORE.quizStarted === false) {
    let startPage = generateStartPage();
    $('main').html(startPage);
    handleStartClick();
  } else if (STORE.questionNumber <= STORE.questions.length) {
    let html = generateQuestions();
    $('main').html(html);
    handleProgressClick();
  } else {
    let html = generateResultsPage();
    $('main').html(html);
    handleRestartClick();
  }
}

function main() {
  renderer();
};

function submitAnswer(event) {
  let answer = $('input[name=answers]:checked').val();
  let truth = STORE.questions[STORE.questionNumber-1].correctAnswer;
  try {
    if(answer === undefined) {
       throw error();
    } else if(truth == answer){
     alert('You are right!');
     STORE.score++;
     STORE.questionNumber++;
   } else {
     alert(`You are wrong! The Correct answer is ${truth}`);
     STORE.questionNumber++;
   }
  } catch(error) {
    alert('Please select an answer');
  }  
}

function completeItem() {
  console.log($(this).parent());
  alert('you are done');
  renderer();
}

function handleStartClick(){
  $('.begin').click(function(event){
    event.preventDefault();
    STORE.quizStarted = true;
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

function handleProgressClick(){
  $('.quizProgress').click(function(event){
    event.preventDefault();
    submitAnswer();
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

function handleRestartClick(){
  $('.restart').click(function(event){
    event.preventDefault();
    STORE.quizStarted = !STORE.quizStarted;
    STORE.questionNumber=0;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    STORE.score=0;
    renderer();
  });
};

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
/**
 * Example store structure
 */

'use strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

const pageTemplates = [
  {
    pageName: 'frontPage',
    content: `
  <p class='startPara'>So begins the quiz. Test your knowledge by pressing the start button below</p>
  <form>
    <button type='submit' id='start'>Start Quiz</button>
  </form>
  `},
  {
    pageName: 'questionPage',
    // TASK: make question button increment counter
    content: `
  <h2>Question [questions[#].[number]]<h2>
  <img src='images/correct-answer.jpg' alt='Correct'></a>
  <form>
      <p>[question]</p>
          <input name="answers" type='radio' value='answer 1'>
            <label for='answer 1'>Answer 1</label><br>
          <input name="answers" type='radio' value='answer 2'>
            <label for='answer 2'>Answer 2</label><br>
          <input name="answers" type='radio' value='answer 3'>
            <label for='answer 3'>Answer 3</label><br>
          <input name="answers" type='radio' value='answer 4'>
            <label for='answer 4'>Answer 4</label><br>          
            <button type='submit' id='checkAnswer'>Submit</button>
          <button type='submit' id='goBack'>Previous</button>
  </form>
  <footer class='ticker'>
      <p class='progress'>Question [questions[#].[number]] of [allQuestions]</p>
      <p class='scoreCount'>[correctCount] correct out of [allQuestions]</p>
  </footer>
  `},
  {
    pageName: 'resultsPage',
    content: `
  <h2>Results</h2>
  <h2 class='scoreResult'> </h2>
  <p>[questions[0]]<br>[userAnswers[0]]</p>
  <p>[questions[1]]<br>[userAnswers[1]]</p>
  <p>[questions[2]]<br>[userAnswers[2]]</p>
  <p>[questions[3]]<br>[userAnswers[3]]</p>
  <p>[questions[4]]<br>[userAnswers[4]]</p>
  <img src='images/trophy-two-correct.jpg' alt='Hello Kitty Guitar'>
  <form>
      <!--although this is a different button than the start button, it's style and function remains the same-->
    <button type='submit' id='start'>Restart Quiz</button>
  </form>
  `
  }];

// temporary counter
let counter = 0;

// Use HTML template to generate desired page layout
function generatePageHTML() {
  let index = 0;
  switch (counter) {
    case 0: index = 0;
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      index = 1;
      break;
    case 6: index = 2;
      break;
  }
  const PageTpl = pageTemplates[index].content;
  return PageTpl;
}

// Render page in HTML
function renderPage() {
  let html = generatePageHTML();
  //console.log(html);
  $('.js-render-page-here').html(html);  
}

// Listening events
// x1. front page [Submit] goes to question page
// 2. question page [Submit] goes to next question, but remains on question template
// x3. final question [Submit] goes to results page
// x4. restart from results page [Submit] goes back to first page

function main() {  
  beginQuiz();
  checkAnswer();
}

// Will take to first question of Quiz - from front or results page
function beginQuiz() {
  renderPage();
  $('#start').on('click', function (evt) {
    evt.preventDefault();
    // counter should reset to = 1    
    console.log(counter);
    counter++;
    console.log(counter);
    renderPage();
  });
}

// Will check answer and increment counter
function checkAnswer() {
  $('#checkAnswer').on('click', function (evt) {
    evt.preventDefault();
    console.log(counter);
    counter++;
    console.log(counter);
    renderPage();
  });
}


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
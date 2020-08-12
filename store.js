'use strict';

// Quiz Questions
const STORE = {
  questions: [
    {
      question: 'How many notes are in a Pentatonic Scale?',
      answers: [
        'Four',
        'Five',
        'Six',
        'Eleven'
      ],
      correctAnswer: 'Five'
    },
    {
      question: 'What instrument did Paganini play?',
      answers: [
        'Flute',
        'Violin',
        'Piano',
        'Trumpet'
      ],
      correctAnswer: 'Violin'
    },
    {
      question: 'Which style of music did Jimi Hendrix pioneer?',
      answers: [
        'Jazz Fusion',
        'Funk',
        'Psychedelic Rock',
        'Jazz Bebop'
      ],
      correctAnswer: 'Psychedelic Rock'
    },
    {
      question: 'Which of the following is NOT a rapper\'s name?',
      answers: [
        'Dr. Octagon',
        'Ghostface Killah',
        'Lil Poopy',
        'Ice Truckah'
      ],
      correctAnswer: 'Ice Truckah'
    },
    {
      question: 'What comes next? "Do, Re, Mi, __"',
      answers: [
        'Ti',
        'Sol',
        'Fa',
        'La'
      ],
      correctAnswer: 'Fa'
    },
    {
      question: 'How many keys does a piano have?',
      answers: [
        '88',
        '100',
        '52',
        '75'
      ],
      correctAnswer: '88'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,  
};

const pageTemplates = [
  {
    pageName: 'frontPage',
    content: `
  <p class='startPara'>So begins the quiz. Test your knowledge by pressing the start button below</p>  
  <button type='submit' id='progress'>Start Quiz</button>  
  `},
  {
    pageName: 'questionPage',
    content: `
  <h2>Question ${STORE.questionNumber}<h2>   
  <form>
      <p>${STORE.questions[STORE.questionNumber-1].question}</p>
          <input name="answers" type='radio' value='answer 1'>
            <label for='answer 1'>${STORE.questions[STORE.questionNumber-1].answers[0]}</label><br>
          <input name="answers" type='radio' value='answer 2'>
            <label for='answer 2'>${STORE.questions[STORE.questionNumber-1].answers[1]}</label><br>
          <input name="answers" type='radio' value='answer 3'>
            <label for='answer 3'>${STORE.questions[STORE.questionNumber-1].answers[2]}</label><br>
          <input name="answers" type='radio' value='answer 4'>
            <label for='answer 4'>${STORE.questions[STORE.questionNumber-1].answers[3]}</label><br>                       
    </form>
    <button type='submit' id='progress'>Submit</button>
  <footer class='ticker'>
      <p class='progress'>${STORE.questionNumber} of ${STORE.questions.length}</p>
      <p class='scoreCount'>${STORE.score} correct, ${STORE.questionNumber - STORE.score-1} incorrect.</p>
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
  
      <!--although this is a different button than the start button, it's style and function remains the same-->
    <button id='start'>Restart Quiz</button>
  
  `
  }];
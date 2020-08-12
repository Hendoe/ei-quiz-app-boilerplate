'use strict';

// Quiz Question template
const STORE= {
    questionCounter:1,
    questionText:'',
    answers:[1, 2, 3, 4],
    correctAnswer:2,
    playerAnswer: '',
    correctStatus:null
}

// Quiz Questions
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
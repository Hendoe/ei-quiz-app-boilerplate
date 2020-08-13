'use strict';

// Quiz Questions
const STORE = {
  questions: [
    {
      question: '',
      answers: [
        '',
        '',
        '',
        ''
      ],
      correctAnswer: ''
    },
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
        'Jazz_Fusion',
        'Funk',
        'Psychedelic_Rock',
        'Jazz_Bebop'
      ],
      correctAnswer: 'Psychedelic_Rock'
    },
    {
      question: 'Which of the following is NOT a rapper\'s name?',
      answers: [
        'Doctor_Octagon',
        'Ghostface_Killah',
        'Lil_Poopy',
        'Ice_Truckah'
      ],
      correctAnswer: 'Ice_Truckah'
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
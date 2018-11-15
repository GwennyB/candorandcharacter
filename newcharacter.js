'use strict';

// see app.js for common functions

// PAGE EXECUTION
// page must load with all blur divs forward, all quizzes back, quiz tokens back
// pull/decode LS
var allCharacters = getFromLocalStorage() || []; // returns either LS or empty array

// create blank character to populate
allCharacters.push(new Character()); // populate quiz results directly to allCharacters[3]
// if allCharacters is full, delete 1st element from allCharacters after successfully creating a new character

// hold quiz objects as they're built
var quizzes = [];

// var quizQuestions = [['q1','q2','q3','q4'],['q1','q2','q3','q4','q5','q6'],['q1','q2','q3','q4']];
var quizBlurbox = ['quizone','quiztwo','quizthree'];
var quizToken = [9,13,9]; // this is the childNode number for the token
var quizFormName = ['quiz-one','quiz-two','quiz-three']; // this is the childNode number for the form

// create quiz objects
for (var newQuiz = 0; newQuiz < 3; newQuiz++) {
  quizzes.push(new Quiz(newQuiz));
  // quizzes[newQuiz].questions.push(quizQuestions[newQuiz]);
  quizzes[newQuiz].blurbox = document.getElementById(quizBlurbox[newQuiz]);
  quizzes[newQuiz].token = quizzes[newQuiz].blurbox.childNodes[quizToken[newQuiz]];
  quizzes[newQuiz].quizForm = document.getElementById(quizFormName[newQuiz]);
}

// PROTO: show and activate listener on 1st quiz

quizzes[0].token.zIndex = '1000';
quizzes[0].makeToken();
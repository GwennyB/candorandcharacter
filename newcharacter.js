'use strict';

// FUNCTIONS

// quiz object constructor
function Quiz (quizNum) {
  this.quizNum;
  this.questions = [];
  this.token = {};
  this.blurbox = {};
  this.quizForm = {};
  this.outputs = [];
}

// quiz prototype functions:
// create, place, and activate token
Quiz.prototype.makeToken = function() {
  this.token.style.zIndex = '100';
  this.token.addEventListener('click',this.renderQuiz);
};

// token click handler: render quiz
Quiz.prototype.renderQuiz = function(event) {
  event.preventDefault();
  // change display on quiz form and token
  this.token.style.display = '-100';
  this.
  // make sure form has button.type = 'submit'
};

// quiz submit handler: process inputs into outputs, push to character
Quiz.prototype.handleSubmit = function(event) {
  // push quiz results to this.outputs
  // call 'flipVisibility'
};

// hide token, quiz, and blur box
Quiz.prototype.flipVisibility = function() {
  // change display on quiz form, blur box
  // call allCharacters[4].renderCharacter
  // move to next quiz
  if (this.quizNum < 4) {
    quizzes[this.quizNum+1].makeToken();
  } else {
    alert('Congratulations... you made a character!');
  };


// PAGE EXECUTION
// page must load with all blur divs forward, all quizzes back, quiz tokens back
// pull/decode LS
var allCharacters = getFromLocalStorage() || []; // returns either LS or empty array

// create blank character to populate
allCharacters.push(new Character()); // populate quiz results directly to allCharacters[3]
// if allCharacters is full, delete 1st element from allCharacters after successfully creating a new character

// hold quiz objects as they're built
var quizzes = [0];

// create quiz objects
quizzes.push(new Quiz(1)); // quizNum = 1
quizzes.push(new Quiz(2)); // quizNum = 2
quizzes.push(new Quiz(3)); // quizNum = 3

quizzes[1].questions.push(['q1','q2','q3','q4']);
quizzes[2].questions.push(['q1','q2','q3','q4','q5','q6']);
quizzes[3].questions.push(['q1','q2','q3','q4']);

quizzes[1].token.push(document.getElementById('quizone').childNodes[11]);
quizzes[2].token.push(document.getElementById('quiztwo').childNodes[15]);
quizzes[3].token.push(document.getElementById('quizthree').childNodes[11]);

quizzes[1].blurbox.push(document.getElementById('quizone'));
quizzes[2].blurbox.push(document.getElementById('quiztwo'));
quizzes[3].blurbox.push(document.getElementById('quizthree'));

quizzes[1].quizForm.push(document.getElementById('quizone').childNodes[13]);
quizzes[2].quizForm.push(document.getElementById('quiztwo').childNodes[17]);
quizzes[3].quizForm.push(document.getElementById('quizthree').childNodes[13]);

// PROTO: show and activate listener on 1st quiz
quizzes[0].makeToken();

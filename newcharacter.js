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
  this.blurbox.style.zIndex = '75';
  this.token.style.zIndex = '100';
  this.token.addEventListener('click',this.renderQuiz);
};

// token click handler: render quiz
Quiz.prototype.renderQuiz = function(event) {
  event.preventDefault();
  // change display on quiz form and token
  this.token.style.display = '-100';
  this.quizForm.style.display = '100';
};

// quiz submit handler: process inputs into outputs, push to character
Quiz.prototype.handleSubmit = function(event) {
  // push quiz results to this.outputs
  this.outputs = ['output','output','output','output'];
  // call 'flipVisibility'
  this.flipVisibility();
};

// hide token, quiz, and blur box
Quiz.prototype.flipVisibility = function() {
  // change display on quiz form, blur box
  this.blurbox.style.zIndex = '-100';
  this.quizForm.style.display = '-100';
  // call allCharacters[4].renderCharacter
};

Quiz.prototype.renderCharacter = function() { // this will come from query string ('existingcharacter.js') or 'new character' ('newcharacter.js')
  // render quiz outputs
  for (var outputs in this.outputs) {
    this.blurbox.childNodes[1+2*outputs].textContent = this.outputs;
  }

  // move to next quiz
  if (this.quizNum < 4) {
    quizzes[this.quizNum+1].makeToken();
  } else {
    alert('Congratulations... you made a character!');
  }
};
  

// PAGE EXECUTION
// page must load with all blur divs forward, all quizzes back, quiz tokens back
// pull/decode LS
var allCharacters = getFromLocalStorage() || []; // returns either LS or empty array

// create blank character to populate
allCharacters.push(new Character()); // populate quiz results directly to allCharacters[3]
// if allCharacters is full, delete 1st element from allCharacters after successfully creating a new character

// hold quiz objects as they're built
var quizzes = [];

var quizQuestions = [['q1','q2','q3','q4'],['q1','q2','q3','q4','q5','q6'],['q1','q2','q3','q4']];
var quizBlurbox = ['quizone','quiztwo','quizthree'];
var quizToken = [9,13,9]; // this is the childNode number for the token
var quizForm = [11,15,11]; // this is the childNode number for the form

// create quiz objects
for (var quizNum = 0; Num < 3; Num++) {
  quizzes.push(new Quiz(quizNum));
  quizzes[quizNum].questions.push(quizQuestions[quizNum]);
  quizzes[quizNum].blurbox.push(document.getElementById(quizBlurbox[quizNum]));
  quizzes[quizNum].token.push(quizzes[quizNum].blurbox.childNodes[quizToken]);
  quizzes[quizNum].quizForm.push(quizzes[quizNum].blurbox.childNodes[quizForm]);
}

// PROTO: show and activate listener on 1st quiz
quizzes[0].makeToken();
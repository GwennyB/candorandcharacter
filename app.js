'use strict';
// var allCharacters = [];

// TASK CARD: build Character object constructor function #18
function Character() {
  this.quizOne = []; // player name, character name, race, alignment (receive from quiz 1)
  this.quizTwo = []; // strength, dexterity, constitution, intelligence, wisdom, charisma (receive from quiz 2)
  this.quizThree = []; // armor class, initiative, speed, hit points (receive from quiz 3)
  this.renderURL = '';

}

// TASK CARD: build Character object constructor function #18
Character.prototype.sendToLocalStorage = function() {
  while(allCharacters.length>4) {
    allCharacters = allCharacters.slice(1);
  }
  var charJSON = JSON.stringify(allCharacters); // encode updated characters list
  localStorage.setItem('storedCharacters',charJSON); // send updated characters list to LS
};

// TASK CARD: build Character object constructor function #18
function getFromLocalStorage () {
  var storedCharacters = localStorage.getItem('storedCharacters');// || []; // get array of 4 chars from LS or return empty array
  storedCharacters = JSON.parse(storedCharacters);
  return storedCharacters;
}

// TASK CARD: build Character object constructor function #18
// load page 'existingcharacter.html', which launches 'existingcharacter.js' and renders with this function
Character.prototype.renderCharacter = function() { // this will come from query string ('existingcharacter.js') or 'new character' ('newcharacter.js')
  // render this.quizOne[i]
  var quizOneOutputs = document.getElementById('quizone');
  for (var outputOne in this.quizOne) {
    quizOneOutputs.childNodes[1+2*outputOne].textContent = this.quizOne[outputOne];
  }
  // render this.quizTwo[i]
  var quizTwoOutputs = document.getElementById('quiztwo');
  for (var outputTwo in this.quizTwo) {
    quizTwoOutputs.childNodes[1+2*outputTwo].textContent = this.quizTwo[outputTwo];
  }
  // render this.quizThree[i]
  var quizThreeOutputs = document.getElementById('quizthree');
  for (var outputThree in this.quizThree) {
    quizThreeOutputs.childNodes[1+2*outputThree].textContent = this.quizThree[outputThree];
  }
};


// quiz object constructor
function Quiz (quizNum) {
  this.quizNum = quizNum;
  // this.questions = [];
  this.token;
  this.blurbox;
  this.quizForm;
  this.outputs = [];
}

// quiz prototype functions:
// create, place, and activate token
Quiz.prototype.makeToken = function() {
  this.token.style.display = 'inline-block';
  for (var whichQuiz = 0; whichQuiz < 3; whichQuiz++) {
    quizzes[whichQuiz].quizForm.style.display = 'none';
  }
  this.token.addEventListener('click',this.handleToken);
};

Quiz.prototype.handleToken = function(event) {
  event.preventDefault();
  this.style.display = 'none';
  var getQuiz = quizzes.find(obj => {return obj.token.alt === this.alt});
  getQuiz.renderQuiz();
};

// token click handler: render quiz
Quiz.prototype.renderQuiz = function() {
  // change display on quiz form and token
  this.quizForm.style.display = 'block';
  // push quiz results to this.outputs
  if (this.quizNum === 0) {
    this.quizOne = quizOneResults();
  }
  if (this.quizNum === 1) {
    this.quizOne = quizTwoResults();
  }
  if (this.quizNum === 2) {
    this.quizOne = quizThreeResults();
    allCharacters[allCharacters.length-1].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter.html?' + allCharacters[allCharacters.length-1].quizOne[1]; 
    allCharacters[allCharacters.length-1].sendToLocalStorage();
  }
};

// quiz submit handler: process inputs into outputs, push to character
// Quiz.prototype.handleSubmit = function(event) {
//   event.preventDefault();
//   var getQuiz = quizzes.find(obj => {return obj.quizForm.textContent === this.textContent});

//   // call 'flipVisibility'
//   getQuiz.flipVisibility();
// };

// hide token, quiz, and blur box
Quiz.prototype.flipVisibility = function() {
  // change display on quiz form, blur box
  this.blurbox.style.backgroundColor = 'transparent';
  this.quizForm.style.display = 'none';
};

Quiz.prototype.renderQuizResults = function() { // this will come from query string ('existingcharacter.js') or 'new character' ('newcharacter.js')
  // render quiz outputs
  for (var whichOutput in this.outputs) {
    this.blurbox.childNodes[1+2*whichOutput].textContent = this.outputs[whichOutput];
  }

  // move to next quiz
  if (this.quizNum < 2) {
    quizzes[this.quizNum+1].makeToken();
  } else {
    this.quizForm.style.display = 'none';
    alert('Congratulations... you made a character!');
  }
};

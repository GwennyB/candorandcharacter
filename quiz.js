'use strict';
//var newCharacter = new Character();

var quizOne = [];
var quizTwo = [];
var quizThree = [];

function quizOneResults() {
  var quizResults = document.getElementById('quiz-one');
  quizResults.addEventListener('submit', function(event) {
    event.preventDefault();

    var quesOne = event.target.question1.value;
    quizOne.push(quesOne);

    var quesTwo = event.target.question2.value;
    if (quesTwo <= 2) quizOne.push('Half Orc');
    if (quesTwo > 2 && quesTwo <= 4) quizOne.push('Human');
    if (quesTwo > 4 && quesTwo <= 6) quizOne.push('Dwarf');
    if (quesTwo > 6 && quesTwo <= 8) quizOne.push('Elf');
    if (quesTwo > 8 && quesTwo <= 10) quizOne.push('Gnome');

    var quesThree = event.target.question3.value;
    if (quesThree > 1) quizOne.push('Evil');
    else quizOne.push('Good');

    var quesFour = event.target.question4.value;
    quizOne.push(quesFour);
  });
}
quizOneResults();

function quizTwoResults() {
  var quizResults = document.getElementById('quiz-two');
  quizResults.addEventListener('submit', function(event) {
    event.preventDefault();

    var quesOne = event.target.question1.value;
    quizTwo.push(quesOne);

    var quesTwo = event.target.question2.value;
    quizTwo.push(quesTwo);

    var quesThree = event.target.question3.value;
    quizTwo.push(quesThree);

    var quesFour = event.target.question4.value;
    quizTwo.push(quesFour);

    var quesFive = event.target.question5.value;
    quizTwo.push(quesFive);

    var quesSix = event.target.question6.value;
    quizTwo.push(quesSix);
  });
}
quizTwoResults();

function quizThreeResults() {
  var quizResults = document.getElementById('quiz-three');
  quizResults.addEventListener('submit', function(event) {
    event.preventDefault();

    var quesOne = event.target.question1.value;
    quizThree.push(quesOne);

    var quesTwo = event.target.question2.value;
    quizThree.push(quesTwo);

    var quesThree = event.target.question3.value;
    quizThree.push(quesThree);

    var quesFour = event.target.question4.value;
    quizThree.push(quesFour);
  });
}
quizThreeResults();

console.log(quizOne);
console.log(quizTwo);
console.log(quizThree);
//ff
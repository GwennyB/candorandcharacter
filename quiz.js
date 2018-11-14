'use strict';
////var newCharacter = new Character();

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
    if (quesThree > 1) quizOne.push('Chaotic Evil');
    else quizOne.push('Lawful Good');

    var quesFour = event.target.question4.value;
    quizOne.push(quesFour);

    event.target.question1.value = '';
    event.target.question2.value = '';
    event.target.question3.value = '';
    event.target.question4.value = '';
  });
}
quizOneResults();

function quizTwoResults() {
  var quizResults = document.getElementById('quiz-two');
  quizResults.addEventListener('submit', function(event) {
    event.preventDefault();

    var quesOne = event.target.question1.value;
    if (quesOne < 100) quizTwo.push('3');
    if (quesOne < 200 && quesOne > 100) quizTwo.push('5');
    if (quesOne < 300 && quesOne > 200) quizTwo.push('7');
    if (quesOne > 300) quizTwo.push('10');

    var quesTwo = event.target.question2.value;
    if (quesTwo <= 2) quizTwo.push('10');
    if (quesTwo <= 5 && quesTwo > 2) quizTwo.push('7');
    if (quesTwo <= 7 && quesTwo > 5) quizTwo.push('3');
    if (quesTwo > 7) quizTwo.push('1');

    var quesThree = event.target.question3.value;
    quizTwo.push(quesThree);

    var quesFour = event.target.question4.value;
    if (quesFour > 9) quizTwo.push('10');
    if (quesFour < 8 && quesFour >= 6) quizTwo.push('4');
    if (quesFour < 6 && quesFour >= 4) quizTwo.push('6');
    if (quesFour < 4 && quesFour >= 2) quizTwo.push('8');
    if (quesFour <= 2) quizTwo.push('10');

    var quesFive = event.target.question5.value;
    quizTwo.push(quesFive);

    var quesSix = event.target.question6.value;
    quizTwo.push(quesSix);

    event.target.question1.value = '';
    event.target.question2.value = '';
    event.target.question3.value = '';
    event.target.question4.value = '';
    event.target.question5.value = '';
    event.target.question6.value = '';
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
    if (quesTwo >= 8) quizThree.push('2');
    if (quesTwo < 8 && quesTwo >= 6) quizThree.push('4');
    if (quesTwo < 6 && quesTwo >= 4) quizThree.push('6');
    if (quesTwo < 4 && quesTwo >= 2) quizThree.push('8');
    if (quesTwo <= 2) quizThree.push('10');

    var quesThree = event.target.question3.value;
    quizThree.push(quesThree);

    var quesFour = event.target.question4.value;
    quizThree.push(quesFour);

    event.target.question1.value = '';
    event.target.question2.value = '';
    event.target.question3.value = '';
    event.target.question4.value = '';
  });
}
quizThreeResults();

console.log(quizOne);
console.log(quizTwo);
console.log(quizThree);

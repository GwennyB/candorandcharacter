'use strict';
var newCharacter = new Character();
//build quiz1 function #20
function Quiz(name, [], buttonID, formID) {

this.name = name
this.questions = [];
this.buttonID = buttonID;
this.forID = formID;
this.results = [];


Quiz.prototype.buttonAndQuiz = function() {
    var container = document.getElementById('buttonContainer');
    var startb = document.createElement('button');
    startb.setAttribute('type', 'submit');
    startb.id = buttonID;
    container.appendChild('startb')
    startb.addEventListener('click', function renderQuiz() {
      var quizPrompt = document.getElementById(this.formID).style.display = 'block';

      var qOne = document.getElementById('qu1');
      qOne.textContent = this.questions[0];

      var qTwo = document.getElementById('qu2');
      qTwo.textContent = this.questions[1];

      var qThree = document.getElementById('qu3');
      qThree.textContent = this.questions[2];

      var qFour = document.getElementById('qu4');
      qFour.textContent = this.questions[3];

      var qFive = document.getElementById('qu5');
      qFive.textContent = this.questions[4];

      var qSix = document.getElementById('qu6');
      qSix.textContent = this.questions[5];

      container.removechild(startb);
    }
}

Quiz.prototype.getResults = function() {
    var quizResults = document.getElementById(this.formID)
    quizResults.addEventListener('submit', function(event) {
        var quesOne = event.target.Question1.value;
        var quesTwo = event.target.Question2.value;
        var quesThree = event.target.Question3.value;
        var quesFour = event.target.Question3.value;
        var quesFive = event.target.Question3.value;
        var quesSix = event.target.Question3.value;
       
        this.results.push(quesOne);
        this.results.push(quesTwo);
        this.results.push(quesThree);
        this.results.push(quesFour);
        this.results.push(quesFive);
        this.results.push(quesSix);


        document.getElementById("formID").style.display = "none";
    }
}

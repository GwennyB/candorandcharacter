'use strict';

//build constructor for quiz objects #20
function Quiz([], [], startButtonID, divID, modalID) {
  this.questions = [];
  this.results = [];
  this.startButtonID = startButtonID;
  this.divID = divID;
  this.modalID = modalID;
}

Quiz.prototype.renderToken = function() {
  var startB = document.getElementById(this.startButtonID);
  startB.addEventListener('click', function renderQuiz() {
    var modal = document.getElementById(this.modalID);
  });

};

Quiz.prototype.renderBlur = function() {
  document.getdivById(this.divID);

};


Quiz.prototype.handleToken = function() {

};

Quiz.prototype.handleSubmi = function () {

};
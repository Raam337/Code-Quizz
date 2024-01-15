
var btn = document.getElementById("start");
var start_screen = document.getElementById("start-screen");
var q_field = document.getElementById("questions");
var q_title = q_field.querySelector("h2");
var q_options = q_field.querySelector("div");
var end_screen = document.getElementById("end-screen");
var feedback = document.getElementById("feedback");
var time = document.getElementById("time");
var choices_wrapper = document.getElementById("choices");
var choice_list = choices_wrapper.querySelectorAll("div");
var score_field = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit_btn = document.getElementById("submit1");

var q_title = document.getElementById("question-title");


//Main code
btn.addEventListener("click", gamestart);
var timeLeft = 70;
var current_question = 0;
var score = 0;
var correctAudio = new Audio("assets/sfx/correct.wav");
var mistakeAudio = new Audio("assets/sfx/incorrect.wav");

choices_wrapper.addEventListener("click", function(event){
    var user_answer = event.target.innerText;
    if(user_answer === question_list[current_question].correct_answer){
      score++;
      correctAudio.play();
    } else {
      timeLeft-= 10;
      mistakeAudio.play();
      if(timeLeft <= 0){
        stopGame();
        return;
      } else {
        time.textContent = timeLeft;
      }
    }
    current_question++;
    if(current_question < question_list.length){
      renderQuestion(current_question);
    } else {
      stopGame();
    }
    

})

//Functions
function gamestart(){
    toggle_elem(start_screen);
    toggle_elem(q_field);
    startTimer();
    renderQuestion(0);
}

var timeInterval;
function startTimer(){
    time.textContent = timeLeft;
    timeInterval = setInterval(function () {
        if(timeLeft <= 0){
          stopGame();
          return;
        } else {
          timeLeft--;
        }
        time.textContent = timeLeft;
      },1000);
}

function renderQuestion(n){
    q_title.textContent = (current_question+1) + ". " + question_list[n].question;
    for (let i = 0; i < 4; i++) {
        choice_list[i].textContent = question_list[n].options[i];
    }
}

function stopGame(){
  clearInterval(timeInterval);
  toggle_elem(q_field);
  toggle_elem(end_screen);
  time.textContent = 0;
  score_field.textContent = `${score}/${question_list.length}`
  
}

function toggle_elem(elem){
  if(elem.classList.contains("hide")){
    elem.classList.remove("hide")
  } else {
    elem.classList.add("hide");
  }
}


submit_btn.addEventListener("click", function(event){
  var score_list = JSON.parse(localStorage.getItem("score_list")) || [];
  score_list.push(`${initials.value} - ${score}/${question_list.length}`);
  localStorage.setItem("score_list", JSON.stringify(score_list));

  window.location.href = "../highscores.html";

})

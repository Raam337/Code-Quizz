
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

var q_title = document.getElementById("question-title");


//Main code
btn.addEventListener("click", gamestart);
var timeLeft = 10;
var current_question = 0;

choices_wrapper.addEventListener("click", function(event){
    var answer = event.target.innerText;


})






//Functions
function gamestart(event){
    start_screen.classList.add("hide");
    q_field.classList.remove("hide");
    startTimer();
    renderQuestion(2);
}

function startTimer(){
    time.textContent = timeLeft;
    var timeInterval = setInterval(function () {
        if(timeLeft === 0){
          clearInterval(timeInterval);
        } else {
          timeLeft--;
        }
        time.textContent = timeLeft;
      },1000);
}

function renderQuestion(n){
    q_title.textContent = question_list[n].question;
    for (let i = 0; i < 4; i++) {
        choice_list[i].textContent = question_list[n].options[i];
    }
}
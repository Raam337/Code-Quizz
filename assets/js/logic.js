
var btn = document.getElementById("start");
var start_screen = document.getElementById("start-screen");
var q_field = document.getElementById("questions");
var q_title = q_field.querySelector("h2");
var q_options = q_field.querySelector("div");
var end_screen = document.getElementById("end-screen");
var feedback = document.getElementById("feedback");

btn.addEventListener("click", gamestart);

function gamestart(event){
    start_screen.classList.add("hide");
    q_field.classList.remove("hide");
    
}


  
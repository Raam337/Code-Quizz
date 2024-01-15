


document.addEventListener("DOMContentLoaded", function(){
    renderScores();


})

document.getElementById("clear").addEventListener("click",function(){
    localStorage.clear();
    renderScores();
})

function renderScores(){

    var scores = JSON.parse(localStorage.getItem("score_list")) || [];

    var highscore_list = document.getElementById("highscores");

    if(scores.length === 0){
        highscore_list.textContent = "No score"
    } else {
        scores.sort(mySort);
        for (const entry of scores) {
            var li = document.createElement("li");
            li.textContent = entry;
            highscore_list.appendChild(li);
        }
    }

}


function mySort(a, b) {
    var backslash1 = a.indexOf('/');
    var backslash2 = b.indexOf('/');
    var numA = parseInt(a.substring(backslash1 - 2, backslash1), 10);
    var numB = parseInt(b.substring(backslash2 - 2, backslash2), 10);
    return numB - numA;
}

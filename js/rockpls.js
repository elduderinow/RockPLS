const scissor = document.getElementById("scissors").id;
const paper = document.getElementById("paper").id;
const rock = document.getElementById("rock").id;
const lizard = document.getElementById("lizard").id;
const spock = document.getElementById("spock").id;

document.getElementById("reset").addEventListener("click", function () {
    location.reload();
});

Array.from(document.querySelectorAll("button.pchoice")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {

        let pchoice = $btn.id;
        document.getElementById("player-choice").innerHTML = pchoice;

    });
});

document.getElementById("comp-rand").addEventListener("click", function () {
    let cArr = [scissor, paper, rock, lizard, spock];
    const rNum = Math.floor(Math.random() * cArr.length);
    const compChoice = (rNum, cArr[rNum]);
    let showRes =   document.getElementById("win-lose");


    document.getElementById("comp-choice").innerHTML = compChoice;
    let plchoice = document.getElementById("player-choice").innerHTML;

    if (plchoice === compChoice) {
       showRes.innerHTML="<img width='100' src='https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png/revision/latest?cb=20161109040841'></img>";
    } else if (plchoice === "rock") {
        if (compChoice === "paper") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else if (compChoice === "scissors") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else if (compChoice === "lizard") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else {
            showRes.innerHTML="<h1>Fatality</h1>";
        }
    } else if (plchoice === "paper") {
        if (compChoice === "rock") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else if (compChoice === "scissors") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else if (compChoice === "lizard") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else {
            showRes.innerHTML="<h1>Flawless</h1>";
        }
    }else if (plchoice === "scissors") {
        if (compChoice === "rock") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else if (compChoice === "paper") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else if (compChoice === "lizard") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else {
            showRes.innerHTML="<h1>Fatality</h1>";
        }
    } else if (plchoice === "lizard") {
        if (compChoice === "rock") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else if (compChoice === "paper") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else if (compChoice === "scissors") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else {
            showRes.innerHTML="<h1>Flawless</h1>";
        }
    } else if (plchoice === "spock") {
        if (compChoice === "rock") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else if (compChoice === "paper") {
            showRes.innerHTML="<h1>Fatality</h1>";
        } else if (compChoice === "scissors") {
            showRes.innerHTML="<h1>Flawless</h1>";
        } else {
            showRes.innerHTML="<h1>Fatality</h1>";
        }
    } else if (plchoice === "Player Choice") {

    }


});




const gameTime = document.getElementById("secondsForGame");
const btn = document.getElementById("startButton");
const gameOver = document.getElementById("gameOver");
const win = document.getElementById("winner");
const playerOnLead = document.getElementById("playerOnLead")

let clickCountS;
let clickCountL;
let keySelect;

btn.addEventListener('click', startGame)

function startGame() {
    window.addEventListener('keydown', playerfunc)
    clickCountS = document.getElementById("clickCountS");
    clickCountL = document.getElementById("clickCountL");
    keySelect = document.getElementById("keySelection");

    let keyS = 0;
    let keyL = 0;
    function playerfunc(e) {

        if (e.keyCode == '83') {
            clickCountS.innerText = keyS++;

        } else if (e.keyCode == '76') {
            clickCountL.innerText = keyL++;
        }
        else {
            keySelect.innerText = `Select between 'S' or 'L' keys`
            // alert(`Select between 'S' or 'L' keys`)
        }

        //extra feature
        if (keyS > keyL) {
            playerOnLead.innerHTML = `Player S on lead`
        }
        if (keyS < keyL) {
            playerOnLead.innerHTML = `Player L on lead`
        }
        //
        if (winnerObj.sPlayer) {
            clickCountS.innerText = winnerObj.sPlayer;
        }
        else if (winnerObj.lPlayer) {
            clickCountL.innerText = winnerObj.lPlayer;
        }

        if (winnerObj.sPlayer > winnerObj.lPlayer) {
            win.innerHTML = "Congrats Player S";

        }
        else if (winnerObj.sPlayer < winnerObj.lPlayer) {
            win.innerHTML = "Congrats Player L";
        }
        else {
            win.innerHTML = "It's a draw, Try Again";
        }
    }
}
//WAS UNABLE TO SET THE COUNTDOWN FOR LAST 3 SECONDS, SO DECIDED TO DO IT FOR THE WHOLE TIME
btn.addEventListener('click', countDown);
let countDownTime;
function countDown() {
    countDownTime = 3;
    const timeLeftDisplay = document.getElementById("timeLeft");
    timeLeftDisplay.innerText = gameTime.value;
    setInterval(() => {
        if (countDownTime <= 0) {
            clearInterval(countDownTime = 0)
        }
        timeLeftDisplay.innerHTML = countDownTime;
        countDownTime -= 1
    }, 1000)

}

btn.addEventListener('click', gameComplete)
winnerObj = { 'sPlayer': 0, 'lPlayer': 0 }
function gameComplete() {
    if (gameTime.value) {
        setTimeout(() => {
            gameOver.style.display = "block";
            winnerObj.sPlayer = clickCountS.innerText;
            winnerObj.lPlayer = clickCountL.innerText;
            console.log(winnerObj);
            clickCountS.innerText = winnerObj.sPlayer;
            console.log(winnerObj.sPlayer);
            clickCountL.innerText = winnerObj.lPlayer;
        }, gameTime.value * 1000)

    }
}

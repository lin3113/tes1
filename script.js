const opening = document.getElementById("opening");
const catGame = document.getElementById("catGame");
const caught = document.getElementById("caught");
const letter = document.getElementById("letter");

const startButton = document.getElementById("startButton");
const cat = document.getElementById("cat");
const envelopeButton = document.getElementById("envelopeButton");

const attemptText = document.getElementById("attemptText");

let attempts = 0;
const maxAttempts = 5;


/* --------------------
   CHANGE SCREEN
-------------------- */

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(element => {
        element.classList.remove("active");
    });

    screen.classList.add("active");
}


/* --------------------
   START GAME
-------------------- */

startButton.addEventListener("click", () => {

    showScreen(catGame);

    setTimeout(() => {
        moveCat();
    }, 500);

});


/* --------------------
   MOVE CAT
-------------------- */

function moveCat() {

    attempts++;

    if (attempts >= maxAttempts) {

        cat.textContent = "😼";

        attemptText.textContent = "Wait... I think you got him.";

        setTimeout(() => {

            showScreen(caught);

        }, 700);

        return;
    }


    const gameArea = document.getElementById("gameArea");

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const catSize = 90;

    const randomX =
        Math.random() * (areaWidth - catSize) + catSize / 2;

    const randomY =
        Math.random() * (areaHeight - catSize) + catSize / 2;


    cat.style.left = `${randomX}px`;
    cat.style.top = `${randomY}px`;


    const messages = [
        "Telat!",
        "Yah dia kabur lagi!",
        "Hampir!",
        "Kayaknya dia mulai capek...",
        "Dikit lagi..."
    ];

    attemptText.textContent =
        messages[Math.min(attempts - 1, messages.length - 1)];

}


/* --------------------
   CAT CLICK
-------------------- */

cat.addEventListener("click", () => {

    if (attempts < maxAttempts) {
        moveCat();
    }

});


/* --------------------
   OPEN ENVELOPE
-------------------- */

envelopeButton.addEventListener("click", () => {

    showScreen(letter);

});
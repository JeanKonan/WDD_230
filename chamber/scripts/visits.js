const visitDisplay = document.querySelector(".visit");

let lastVisit = Number(window.localStorage.getItem("lastVisited")) || 0;

let days_since = Math.floor((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    if (days_since < 1) {
        visitDisplay.textContent = "Back so soon! Awesome!";
    } else {
        if (days_since == 1) {
            visitDisplay.textContent = "You last visited 1 day ago.";
        } else {
            visitDisplay.textContent = "You last visited "+ days_since +" days ago.";
        }
    }
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisited", Date.now());

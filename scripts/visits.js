const visitDisplay = document.querySelector(".visit");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
    visitDisplay.textContent = "Welcome new comer!";
} else {
    visitDisplay.textContent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
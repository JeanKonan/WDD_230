const mode = document.querySelector("#mode");
const active_mode = document.querySelector(".active");

mode.addEventListener('click', () => {
    document.querySelector("body").classList.toggle('dark');
    document.querySelector("event-title").classList.toggle('dark-mode');

    if (active_mode.textContent == "DARK") {
        active_mode.textContent = "LIGHT";
    }else {
        active_mode.textContent = "DARK";
    }
    
})
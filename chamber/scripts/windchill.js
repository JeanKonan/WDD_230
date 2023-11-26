const temp = 43;
const windspeed = 5;
const windchill = document.querySelector(".windchill");

if (temp <= 50 & windspeed > 3) {
    windchill.textContent = "Windchill: " + (35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp *  Math.pow(windspeed, 0.16)).toFixed(3) + " mph";
} else {
    windchill.textContent = "Windchill: N/A";
}


const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=7.6898163829301485&lon=-5.035242382448299&units=imperial&appid=ba333923df47ef1bc51dc1b48e42e797'

// 7.6898163829301485, -5.035242382448299
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.floor(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
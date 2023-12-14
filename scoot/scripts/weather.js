
const currentTemp = document.querySelector('.temp');
const forecastTemp = document.querySelector('.forecast');


let high = -200;
let temp_Alt = false;
let today;

window.onload = function() {

    const highTemp = document.querySelector(".high");

    highTemp.textContent = high;

    document.getElementById('close').addEventListener('click', () => {
        document.getElementById('banner').style.display = 'none';
    })

};

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.511431795457472&lon=-86.95006563223002&units=imperial&cnt=10&appid=ba333923df47ef1bc51dc1b48e42e797';

// 20.475768948789124, -86.97526863457125
// 20.511431795457472, -86.95006563223002

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
            // console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayForecast(data) {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let lastDate;
    let i = 0

    data.list.forEach(day => {
        
        let date = `${day.dt_txt}`;

        date = date.split(' ');

        const d = new Date(date[0]);
        let forecast_day;

        if (d.getDay() < 6) {
            forecast_day = weekday[d.getDay()+1];
        } else {
            forecast_day = weekday[0];
        }

        let figure = document.createElement('figure');

        let caption = document.createElement('figcaption');
        let temp = document.createElement('span');
        let weather_icon = document.createElement('img');
        let the_day = document.createElement('h4');

        the_day.innerHTML = forecast_day;
        temp.innerHTML = `${Math.floor(day.main.temp)}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        let desc = day.weather[0].description;

        weather_icon.setAttribute('src', iconsrc);
        weather_icon.setAttribute('alt', desc);
        caption.textContent = `${desc}`;
        figure.append(temp, weather_icon, caption);

        if (Math.floor(day.main.temp) > high & date[0] == today) {
            high = Math.floor(day.main.temp);
            temp_Alt = true;
        }

        if (i == 0) {
            currentTemp.appendChild(figure);
            high = Math.floor(day.main.temp);
            today = date[0]
        }

        if (lastDate != forecast_day & i >= 1 & date[1] == "15:00:00") {
            forecastTemp.append(the_day, figure);

            lastDate = forecast_day;            
        }

        i++;
    });

    window.onload = function() {

        const highTemp = document.querySelector(".high");
    
        highTemp.textContent = high;
    
        document.getElementById('close').addEventListener('click', () => {
            document.getElementById('banner').style.display = 'none';
        })
    
    };

}
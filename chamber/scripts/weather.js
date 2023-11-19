
const currentTemp = document.querySelector('.temp');
const forecastTemp = document.querySelector('.forecast');

window.onload = function() {
    var d = new Date();
    var dayOfWeek = d.getDay();

    // Check if it's Monday (1), Tuesday (2), or Wednesday (3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('banner').style.display = 'block';
    }

    document.getElementById('close').onclick = function() {
        document.getElementById('banner').style.display = 'none';
    };
};

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=7.6898163829301485&lon=-5.035242382448299&units=imperial&cnt=24&appid=ba333923df47ef1bc51dc1b48e42e797';

// 7.6898163829301485, -5.035242382448299
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
        let forecast_day = weekday[d.getDay()+1];

        let figure = document.createElement('figure');

        let caption = document.createElement('figcaption');
        let temp = document.createElement('span');
        let weather_icon = document.createElement('img');
        let the_day = document.createElement('h4');

        the_day.innerHTML = forecast_day;
        temp.innerHTML = `${day.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        let desc = day.weather[0].description;

        weather_icon.setAttribute('src', iconsrc);
        weather_icon.setAttribute('alt', desc);
        caption.textContent = `${desc}`;
        figure.append(weather_icon, temp, caption);

        if (i == 0) {
            currentTemp.appendChild(figure);
        }

        if (lastDate != forecast_day & i >= 1) {

            
            forecastTemp.append(the_day, figure);

            lastDate = forecast_day;            
        }

        i++;
    });

}
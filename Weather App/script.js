document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

document.getElementById('city-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const city = document.getElementById('city-input').value;
        getWeather(city);
    }
});

function getWeather(city) {
    const apiKey = '9f9efc70f7358cb143c4d9facf91b88b'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temp').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
                
                const weatherCondition = data.weather[0].main.toLowerCase();
                let weatherImage = '';

                switch(weatherCondition) {
                    case 'clear':
                        weatherImage = 'sunny.png';
                        break;
                    case 'clouds':
                        if (data.weather[0].description.toLowerCase().includes('partly')) {
                            weatherImage = 'partly_cloudy.png';
                        } else {
                            weatherImage = 'cloudy.png';
                        }
                        break;
                    case 'rain':
                    case 'drizzle':
                        weatherImage = 'rainy.png';
                        break;
                    case 'snow':
                        weatherImage = 'snowy.png';
                        break;
                    case 'wind':
                        weatherImage = 'windy.png';
                        break;
                    case 'thunderstorm':
                        weatherImage = 'stormy.png';
                        break;
                    case 'mist':
                            weatherImage = 'mist.png';
                        break;
                    default:
                        weatherImage = 'default.png'; // A default image in case of an unknown weather condition
                        break;
                }

                document.getElementById('weather-icon').src = weatherImage;
                document.querySelector('.weather-info').style.display = 'block';
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            alert('Error fetching weather data!');
            console.error(error);
        });
}

function getWeather() {
    const apiKey = '892ff7054fc0631a745078bc04bebcb6';

    const cityInput = document.getElementById('cityInput').value;

    if (cityInput === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    
    if (data.cod === '404') {
        weatherContainer.innerHTML = `<p>City not found. Please try again.</p>`;
    } else {
        const weatherDescription = data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
        const cityName = data.name;

        weatherContainer.innerHTML = `
            <h2>${cityName}</h2>
            <p>Weather: ${weatherDescription}</p>
            <p>Temperature: ${temperature} &deg;C</p>
        `;
    }
}

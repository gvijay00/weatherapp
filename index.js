document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;

    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function fetchWeather(city) {
    const apiKey = '50ef77b4524311d641c934a2110e090c';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        // console.log(response)
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.log(error);

        let a = document.getElementById('weatherResult')
        a.style.color = 'red'
        a.innerText = error.message;
    }
}

function displayWeather(data) {
    console.log(data);

    const { name, main, weather } = data;
    const weatherInfo = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>humidity: ${main.humidity} g/m<sup>3<sup>.</p>
        <p>Condition: ${weather[0].description}</p>
    `;
    let b=document.getElementById('weatherResult');
    b.style.color='black'
    b.innerHTML = weatherInfo;
}

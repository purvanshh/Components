import React, { useState, useEffect } from 'react';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error('Error fetching weather:', error));
    }
  }, [city]);

  return (
    <div className="WeatherComponent">
      <h3>Weather Component</h3>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city"
      />
      {weather && (
        <div>
          <h4>{weather.name}</h4>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;

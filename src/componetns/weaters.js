import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Замените 'YOUR_API_KEY' на ваш API-ключ от OpenWeatherMap
    const apiKey = "876742b48bdd93bcd58a9a4e5ba5840a";
    const lat = '56.324'; // Замените на реальные координаты
    const lon = '38.823';

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;


var expect = function(val) {
  return {
      toBe: (vol) => {
          if(val === vol){  
              return true 
          }else return new Error("Not Equal");
      },
      notToBe: (vol) => {
         if(val !== vol){ 
          return true
         }else throw new Error("Not Equal");
      }
  }
};
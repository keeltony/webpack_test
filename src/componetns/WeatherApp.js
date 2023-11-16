import React, { useState, useEffect } from 'react';

import GlobalSvgSelector from '../images/icons/GlobalSvgSelector';

function WeatherApp () {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Замените 'YOUR_API_KEY' на ваш API-ключ от OpenWeatherMap
    const apiKey = "e9d8fa34428761940086551523bef397";
    const lat = '56.324'; // Замените на реальные координаты
    const lon = '38.823';

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=56.324&lon=38.823&appid=e9d8fa34428761940086551523bef397`; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
    <div className="this_week">
        <div className="btn_this_week">
            <span>На неделю</span>
        </div>
        <div className="card_week" id="create_card">
            {weatherData.list.map(dat => <div className="card_day">
                <div className="icon"><GlobalSvgSelector id='rain'/></div>
                <div className="temp_card">{dat.main.temp}</div>
                <div className="dop_temp_card">{dat.main.feels_like}</div>
                <div className="sky">{dat.weather[0].description}</div> 
        </div>
        )}
    </div>
</div>
  );
};

export default WeatherApp;
import React, { useEffect, useState } from "react";

import '../styles/ThisDay.css';
import GlobalSvgSelector from "../images/icons/GlobalSvgSelector";
import Clock from "./Clock";

function ThisDay(){

    const [weatherThisDay, setWeatherData] = useState('loading');

    useEffect(() => {
        // Замените 'YOUR_API_KEY' на ваш API-ключ от OpenWeatherMap
        const apiKey = "e9d8fa34428761940086551523bef397";
        const lat = '56.324'; // Замените на реальные координаты
        const lon = '38.823';
    
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=56.324&lon=38.823&appid=e9d8fa34428761940086551523bef397`; 
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data.list[0].main.temp);         
          });
      }, []);

    return<div className="this_day">
        <div className="this_day_top">
            <div>
                <div className="temp">{weatherThisDay}&deg;F</div>
                <div className="this_day_name">Сегодня</div>
            </div>
            <GlobalSvgSelector id='sunny'/>  
        </div>
        <div className="this_day_down">
            <div className="this_day_down_text">Время: {Clock()}</div>
            <div >Город: <span>Москва</span></div>
        </div>
    </div>


}

export default ThisDay;


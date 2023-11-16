import React, { useEffect, useState } from "react";

import '../styles/ThisDayInfo.css';
import GlobalSvgSelector from "../images/icons/GlobalSvgSelector";

function ThisDayInfo(){
    
    const [weatherThisDayInfo, setWeatherThisDay] = useState('loading');


    useEffect(()=>{
        const lan = 1231;
        const lon = 1231;
        const apiKey = '123123';
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=56.324&lon=38.823&appid=e9d8fa34428761940086551523bef397`; 

        fetch(url)
        .then((response) => response.json())
        .then((date) => {
            setWeatherThisDay(date.list[0].main);
        });
    }, []);


    return<div className="dop_info_this_day">
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='temp' />
            </div>
            <div className="info_this_day_text">Температура: <span>{weatherThisDayInfo.temp} - ощущается как {weatherThisDayInfo.feels_like}</span></div>
        </div>
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='pressure' />
            </div>
            <div className="info_this_day_text">Давление: <span>{weatherThisDayInfo.pressure} мм ртутного столба - нормальное</span></div>
        </div>
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='precipitation' />
            </div>
            <div className="info_this_day_text">Осадки: Нет данных</div>
        </div>
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='wind' />
            </div>
            <div className="info_this_day_text">Ветер: Нет данных</div>
        </div>
    </div>
}


export default ThisDayInfo;


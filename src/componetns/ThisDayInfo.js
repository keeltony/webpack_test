import React from "react";

import '../styles/ThisDayInfo.css';
import GlobalSvgSelector from "../images/icons/GlobalSvgSelector";

function ThisDayInfo(){
    return<div className="dop_info_this_day">
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='temp' />
            </div>
            <div className="info_this_day_text">Температура: <span>20° - ощущается как 17°</span></div>
        </div>
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='pressure' />
            </div>
            <div className="info_this_day_text">Давление: <span>765 мм ртутного столба - нормальное</span></div>
        </div>
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='precipitation' />
            </div>
            <div className="info_this_day_text">Осадки: <span>Без осадков</span></div>
        </div>
        <div className="info_this_day">
            <div className="logo_info_this_day">
                <GlobalSvgSelector id='wind' />
            </div>
            <div className="info_this_day_text">Ветер: <span>3 м/с юго-запад - легкий ветер</span></div>
        </div>
    </div>
}


export default ThisDayInfo;


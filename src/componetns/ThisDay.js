import React, { useEffect, useState } from "react";

import '../styles/ThisDay.css';
import GlobalSvgSelector from "../images/icons/GlobalSvgSelector";
import Clock from "./Clock";

function ThisDay(){

    return<div className="this_day">
        <div className="this_day_top">
            <div>
                <div className="temp">20°</div>
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


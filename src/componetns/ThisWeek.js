import React from "react";

import '../styles/ThisWeek.css';
import GlobalSvgSelector from "../images/icons/GlobalSvgSelector";
import GetDate from "./GetDate";


function ThisWeek () {
    let date = GetDate();

    function mounthInfo (month) {
        switch(month){
            case 0: 
                return 'Января';

            case 1:
                return 'Февраля';

            case 2:
                return 'Марта';

            case 3:
                return 'Апреля'

            case 4: 
                return 'Мая';

            case 5:
                return 'Июня';

            case 6:
                return 'Июля';

            case 7:
                return 'Августа'

            case 8: 
                return 'Сентября';

            case 9:
                return 'Октября';

            case 10:
                return 'Ноября';

            case 11:
                return 'Декабря'

            default:
                return 'какого то месяца)';
        }

    }

    function dayInfo (day) {
        switch(day) {
            case 0:
                return 'Воскресенье';
            case 1:
                return 'Понедельник';
            case 2:
                return 'Вторник';
            case 3:
                return 'Среда';
            case 4:
                return 'Четверг';

            case 5:
                return 'Пятница';
            case 6:
                return 'Суббота';

            default :
                return 'Не определено('
            
        } 
    }


    return<div className="this_week">
        <div className="btn_this_week">
            <span>На неделю</span>
        </div>
        <div className="card_week" id="create_card">
            {date.map(dat => <div className="card_day">
                <div className="day">{(dat == date[0]) ? 'Сегодня': (dat == date[1] ? 'Завтра': dayInfo(new Date(dat).getDay()))}</div>
                <div className="numder_month">{`${new Date(dat).getDate()} ${mounthInfo(new Date(dat).getMonth())}`}</div>
                <div className="icon"><GlobalSvgSelector id='rain'/></div>
                <div className="temp_card">+18°</div>
                <div className="dop_temp_card">+15°</div>
                <div className="sky">Облачно</div> 
        </div>
        )}
    </div>
</div>
}

export default ThisWeek;
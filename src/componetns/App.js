import React, {Component} from "react";

import "../styles/App.css";

import Header from './Header.js';
import ThisDay from "./ThisDay.js";
import ThisDayInfo from "./ThisDayInfo.js";
import ThisWeek from "./ThisWeek.js";
import Footer from "./Footer.js";



import Footer from "./Footer.js";





function App () {

    return (
        <div className="conteiner">
            <React.Fragment>
                <Header />
                <div className="this_day_conteiner">
                    <ThisDay />
                    <ThisDayInfo />
                </div>
                <ThisWeek />
                
                <div className="footer_div">
                    <Footer />
                </div>
            </React.Fragment>
        </div>
    );
    
}

export default App;
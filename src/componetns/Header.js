import React from "react";
import Select from "react-select";

import '../styles/Header.css';
import  GlobalSvgSelector  from "../images/icons/GlobalSvgSelector";



function Header() {
    const options = [
        { value: 'chocolate', label: 'Москва' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    
    const StylesSelect = {control: (styles) => ({
        ...styles,
        border: 'none',
        borderRadius: '10px',
        width: '194px',
        heidht: '37px',
        backgroundColor: '#4793FF33',
        zIndex: '100',


    })}
    return (<header>
        <div className="wrapper">
            <div className="logo">
                <GlobalSvgSelector id='header-logo'/>
            </div>
            <div className="title">React weather</div>
        </div>
        <div className="wrapper">
            <div className="change_theme">
                <GlobalSvgSelector id='change_theme'/>
            </div>
            <Select defaultValue={options[0]} styles={StylesSelect} options={options} />
        </div>
    </header>)
    }


export default Header;
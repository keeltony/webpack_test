function DateWeek () {
    let arrayDate = [];


    for (let i = 0; i < 7; i++) {
        let date = new Date();
        arrayDate.push(date.setDate(date.getDate()+i));
    }

    return arrayDate;

};


export default DateWeek;
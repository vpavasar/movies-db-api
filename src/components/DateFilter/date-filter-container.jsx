import React from "react";
import DateFilterView from "./date-filter-view";
import './date-filter.css';

const DateFilterContainer = (props) => {
    const {changeCurrentURL} = props;

    const [selectedDateFrom, setSelectedDateFrom] = React.useState(null);
    const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());

    const handleDateChangeDateFrom = (date) => {
        const dateString = dateToString(date);

        changeCurrentURL('release_date.gte', dateString);

        setSelectedDateFrom(date);
    };

    const handleDateChangeDateTo = (date) => {
        const dateString = dateToString(date);

        changeCurrentURL('release_date.lte', dateString);

        setSelectedDateTo(date);
    };

    const dateToString = (date) => {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if(month < 10) {
            // month = `0${month}`;
            month = '0' + month;
        }

        if(day < 10) {
            // day = `0${day}`;
            day = '0' + day;
        }

        const dateString = `${year}-${month}-${day}`;

        return dateString;
    };

    return <DateFilterView handleDateChangeDateFrom={handleDateChangeDateFrom}
                           handleDateChangeDateTo={handleDateChangeDateTo}
                           selectedDateFrom={selectedDateFrom}
                           selectedDateTo={selectedDateTo}/>
};

export default DateFilterContainer;
import React, { useState } from 'react'
import "./DateCard.styles.scss";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.css";


function DateCard({placeholder}) {
    const [date, setDate] = useState(null);
    return (
        <div class='date-card'>
            <Flatpickr
                className="date-picker"
                placeholder={placeholder}
                value={date}
                onChange={([date]) => {
                    setDate(date);
                }}
            />
            <div className="calendar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" /></svg>
            </div>
        </div>
    )
}

export default DateCard
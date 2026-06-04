
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  return (
    <div className="pdp-details-tab">
        <div className="tabs-content-box calendar-pdp">
            <h2>Availability</h2>
            <p className="p-0 m-0 mb-5">The calendar is for your orientation! <span className="d-block"> Always feel free to contact us directly!</span> <span className="d-block">Personal advice is our strength!</span></p>

             <div className="calendar-wrapper opencalendar-box">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    inline
                    minDate={today}
                    filterDate={(date) => date >= today}
                    dayClassName={(date) => {
                    return date < today ? "past-date" : "available-date";
                    }}/>
            </div>
        </div>
    </div>
  )
}

export default Calendar
import React from "react";
import { useSelector } from "react-redux";
import "./CalendarGrid.css";
import { WEEKDAYS, TIME } from "../Constants";

const CalendarGrid = () => {
  const selectedDay = useSelector((state) => state.state.selectedDay);
  const selectedDate = useSelector((state) => state.state.selectedDate);

  const getMonday = (date, day) => {
    const currentDate = new Date(date);
    const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(currentDate.setDate(diff));
  };

  const getNextDate = (date) => {
    let currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate;
  };

  const getSelectedWeek = () => {
    let currdate = getMonday(selectedDate, selectedDay);
    let selectedWeek = [];
    for (let i = 0; i < 7; i++) {
      selectedWeek.push({
        date: currdate.getDate(),
        day: WEEKDAYS[currdate.getDay()],
      });
      currdate = getNextDate(currdate);
    }
    return selectedWeek;
  };

  const setMeeting = (row, date) => {
    console.log("selected grid", row, date);
  };

  return (
    <div className="calendarGrid">
      <div className="rows">
        <div className="rowHeader">
          {TIME.map((row) => (
            <div key={row} className="rowCells">
              {row}
            </div>
          ))}
        </div>
        {selectedDate &&
          getSelectedWeek().map((curr) => (
            <div key={curr.date}>
              <div className="columnHeader">{curr.day}</div>
              <div className="columnHeader">{curr.date}</div>
              <div className="body">
                {TIME.map((row) => (
                  <div
                    key={row}
                    className="cells"
                    onClick={() => setMeeting(row, curr.date)}
                  ></div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarGrid;

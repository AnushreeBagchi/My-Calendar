import React from "react";
import { useSelector } from "react-redux";
import "./CalendarGrid.css";

const CalendarGrid = () => {
  const weekDays = useSelector((state) => state.state.weekDays);
  const rows = useSelector((state) => state.state.time);
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
    let selectedWeek = [currdate.getDate()];
    for (let i = 0; i < 7; i++) {
      if (i > 0) {
        currdate = getNextDate(currdate);
        selectedWeek.push(currdate.getDate());
      }
    }
    return selectedWeek;
  };

  const setMeeting = (row, date) => {
    console.log("selected grid", row, date);
  };

  return (
    <div className="calendarGrid">
      <div className="columnHeader">
        {weekDays.map((day) => (
          <div className="day">{day}</div>
        ))}
      </div>
      <div className="rows">
        {getSelectedWeek().map((date) => (
          <div className="day">
            {date}
            <div className="rowBody">
              {rows.map((row) => (
                <div>
                  <div onClick={() => setMeeting(row, date)}>{row}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;

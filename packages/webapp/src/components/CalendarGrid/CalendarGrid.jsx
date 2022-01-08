import React from "react";
import { useSelector } from "react-redux";
import "./CalendarGrid.css";
import { WEEKDAYS, TIME } from "../Constants";
import { Div, Grid, Item, Box } from "../../utils/utils";

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
    <Div className="calendarGrid">
          <Grid item spacing={0} className="rowHeader">
            <Item className="rowCells"></Item>
            {TIME.map((row) => (
              <Item className="rowCells">{row}</Item>
            ))}
          </Grid>

      {selectedDate &&
        getSelectedWeek().map((curr) => (
          <Div className="column" key={curr.date}>
            <Div className="columnHeader">{curr.day}</Div>
            <Div className="columnHeader">{curr.date}</Div>
            <Box sx={{ flexGrow: 1 }} className="Box">
              <Grid container spacing={0} rowSpacing={0} columnSpacing={0}>
                <Grid item xs={8} md={8} spacing={0}>
                  {TIME.map((row) => (
                    <Item className="cells"></Item>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Div>
        ))}
    </Div>
  );
};

export default CalendarGrid;

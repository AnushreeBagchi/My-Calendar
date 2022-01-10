import React from "react";
import { useSelector } from "react-redux";
import "./CalendarGrid.css";
import { WEEKDAYS, TIME } from "../Constants";
import { Div, Grid, Item, Box } from "../../utils/utils";
import { parse } from 'date-fns';

const CalendarGrid = () => {
  const today = new Date();
  const selectedDay = useSelector((state) => state.state.selectedDay);
  const selectedDate = useSelector((state) => state.state.selectedDate);

  const getMonday = (date, day) => {
    const currentDate = parse(date, 'dd-MM-yyyy', new Date());
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
        date: currdate,
        day: WEEKDAYS[currdate.getDay()],
      });
      currdate = getNextDate(currdate);
    }
    return selectedWeek;
  };

  const setMeeting = (row, date) => {
    console.log("selected grid", row, date);
  };

  const isToday = (currentDate) =>
    currentDate.toDateString() === today.toDateString();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="calendarGrid">
        <Grid item className="rowHeader">
          <Item className="rowCells"></Item>
          {TIME.map((row) => (
            <Item className="rowCells" key={row}>
              {row}
            </Item>
          ))}
        </Grid>

        {selectedDate &&
          getSelectedWeek().map((curr) => (
            <Div className="column" key={curr.date}>
              <Grid className="columnHeader">
                <Div className={isToday(curr.date) ? "colorBlue" : ""}>
                  {curr.day}
                </Div>
              </Grid>
              <Grid className="columnHeader">
                <Div className={isToday(curr.date) ? "today" : "notToday"}>
                  {curr.date.getDate()}
                </Div>
              </Grid>
              <Grid container spacing={0} rowSpacing={0} columnSpacing={0}>
                <Grid item xs={8} md={8}>
                  {TIME.map((row) => (
                    <Item
                      key={row}
                      className="cells"
                      onClick={() => setMeeting()}
                    ></Item>
                  ))}
                </Grid>
              </Grid>
            </Div>
          ))}
      </Grid>
    </Box>
  );
};

export default CalendarGrid;

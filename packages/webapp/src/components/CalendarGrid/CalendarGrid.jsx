import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CalendarGrid.css";
import { WEEKDAYS, TIME } from "../Constants";
import { Div, Grid, Item, Box } from "../../utils/utils";
import { parse } from "date-fns";
import ComposeTask from "../ComposeTask/ComposeTask";

const CalendarGrid = () => {
  const today = new Date();
  const selectedDay = useSelector((state) => state.state.selectedDay);
  const selectedDate = useSelector((state) => state.state.selectedDate);
  const events = useSelector((state) => state.state.events);
  console.log(events);

  const [isModalOpen, setModal] = useState(false);
  const [composeTaskDate, setTaskDate] = useState();
  const [composeTaskTime, setTaskTime] = useState();

  const getMonday = (date, day) => {
    const currentDate = parse(date, "dd-MM-yyyy", new Date());
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

  const onModalOpen = (time, date) => {
    setTaskDate(date);
    setTaskTime(time);
    setModal(true);
  };

  const onModalClose = () => setModal(false);

  const isToday = (currentDate) =>
    currentDate.toDateString() === today.toDateString();

  return (
    <>
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
                        onClick={() => onModalOpen(row, curr.date)}
                      ></Item>
                    ))}
                  </Grid>
                </Grid>
              </Div>
            ))}
        </Grid>
      </Box>
      <ComposeTask
        open={isModalOpen}
        handleClose={onModalClose}
        composeTaskDate={composeTaskDate || new Date()}
        composeTaskTime={composeTaskTime}
      />
    </>
  );
};

export default CalendarGrid;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateSelected } from "../../state/state";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import "./NavigationCalendar.css";
import { format, parse } from 'date-fns'

const NavigationCalendar = () => {
  const dispatch = useDispatch();
  const defaultDate = new Date();
  const gridDateString = useSelector((state) => state.state.selectedDate);
  const selectedGridDate = gridDateString ? parse(gridDateString, 'dd-MM-yyyy', new Date()) : defaultDate;
  const [selectedDate, setValue] = React.useState(selectedGridDate);

  useEffect(() => {
    dispatch(
      dateSelected({
        date: format(selectedDate, 'dd-MM-yyyy'),
        day: selectedDate.getDay(),
      })
    );
  }, [dispatch, selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker
        date={selectedGridDate}
        onChange={(newDate) => setValue(newDate)}
        minDate={defaultDate}
        className="calendarPicker"
      />
    </LocalizationProvider>
  );
};

export default NavigationCalendar;

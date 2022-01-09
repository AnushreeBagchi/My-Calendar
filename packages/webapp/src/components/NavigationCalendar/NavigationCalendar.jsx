import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dateSelected } from "../../state/state";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";

const NavigationCalendar = () => {
  const dispatch = useDispatch();
  const defaultDate = new Date();
  const [selectedDate, setValue] = React.useState(defaultDate);

  useEffect(() => {
    dispatch(
      dateSelected({
        date: selectedDate.toDateString(),
        day: selectedDate.getDay(),
      })
    );
  }, [dispatch, selectedDate]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          date={selectedDate}
          onChange={(selectedDate) => setValue(selectedDate)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default NavigationCalendar;

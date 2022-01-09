import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dateSelected } from "../../state/state";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";

const NavigationCalendar = () => {
  const defaultDate = new Date();
  const [value, setValue] = React.useState(defaultDate);

  useEffect(() => {
    dispatch(
      dateSelected({
        date: defaultDate.toDateString(),
        day: defaultDate.getDay(),
      })
    );
  });

  const dispatch = useDispatch();
  const onDateSelect = (selectedDate) => {
    setValue(selectedDate);
    dispatch(
      dateSelected({
        date: selectedDate.toDateString(),
        day: selectedDate.getDay(),
      })
    );
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={value} onChange={onDateSelect} />
      </LocalizationProvider>
    </div>
  );
};

export default NavigationCalendar;

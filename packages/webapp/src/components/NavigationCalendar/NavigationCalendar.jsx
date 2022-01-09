import Calendar from "react-calendar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dateSelected } from "../../state/state";

const NavigationCalendar = () => {
  const defaultDate = new Date();
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
    dispatch(
      dateSelected({
        date: selectedDate.toDateString(),
        day: selectedDate.getDay(),
      })
    );
  };
  return (
    <div>
      <Calendar onChange={onDateSelect} />
    </div>
  );
};

export default NavigationCalendar;

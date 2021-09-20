import Calendar from 'react-calendar';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dateSelected } from '../../state/state';

const NavigationCalendar = () =>  {
  const dispatch = useDispatch();
  const onDateSelect = (selectedDate) => {
    let date = `${selectedDate.getDate()}/${selectedDate.getMonth()+1}/${selectedDate.getFullYear()}` ;
    dispatch(dateSelected(selectedDate));
  }
  return (
    <div>
      <Calendar
        onChange={onDateSelect}
      />
    </div>
  );
}

export default NavigationCalendar;
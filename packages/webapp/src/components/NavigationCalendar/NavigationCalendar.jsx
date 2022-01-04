import Calendar from 'react-calendar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dateSelected } from '../../state/state';

const NavigationCalendar = () =>  {
  useEffect(()=> {
    dispatch(dateSelected(new Date()));
  });

  const dispatch = useDispatch();
  const onDateSelect = (selectedDate) => {
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
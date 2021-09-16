import Calendar from 'react-calendar'
import React, { useState } from 'react';

const NavigationCalendar = () =>  {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default NavigationCalendar;
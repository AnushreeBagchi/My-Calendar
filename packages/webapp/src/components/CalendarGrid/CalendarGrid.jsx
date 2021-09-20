import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CalendarGrid.css'

const CalendarGrid = () => {
  const weekDays = useSelector(state => state.state.weekDays);
  const rows = useSelector(state => state.state.time);
  const selectedDay = useSelector(state => state.state.selectedDay);
  const selectedDate = useSelector(state => state.state.selectedDate);

  return (
    <div className='calendarGrid'>
      <div className='rowHeader'>
        {weekDays.map((day, dayId) => (
          <div className='day'>{day}</div>
        ))}
      </div>
      <div className='rowBody'>
        {rows.map(row => (
          <div className='gridRow'>
            <div className='timeCell'>{row}</div>
            <div className='grid'>
              {weekDays.map(day => (
                <div className='cells'></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarGrid

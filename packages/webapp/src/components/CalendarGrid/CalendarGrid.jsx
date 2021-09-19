import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../state/state'
import { useTable } from 'react-table'
import './CalendarGrid.css'

const CalendarGrid = () => {
  const weekDays = useSelector(state => state.state.weekDays);
  const dispatch = useDispatch();
  const rows = useSelector(state => state.state.time);

  return (
    <div className='calendarGrid'>
      <div className='rowHeader'>
        {weekDays.map(day => (
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

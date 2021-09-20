import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'counter',
  initialState: {
    weekDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    time: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12AM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM','12PM'
    ],
    selectedDate: '',
    selectedDay: '',
  },
  reducers: {
    dateSelected: (state, inputDate) => {
      const selectedDate = inputDate.payload;
      let date = `${selectedDate.getDate()}/${selectedDate.getMonth()+1}/${selectedDate.getFullYear()}` ;
      let selectedDay = selectedDate.getDay();
      state.selectedDate = date;
      state.selectedDay = selectedDay;
    }
  }
})

export const { dateSelected } = calendarSlice.actions

export default calendarSlice.reducer

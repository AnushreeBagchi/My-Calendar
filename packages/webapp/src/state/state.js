import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'counter',
  initialState: {
    selectedDate: '',
    selectedDay: '',
  },
  reducers: {
    dateSelected: (state, inputDate) => {
      const selectedDate = inputDate.payload;
      let selectedDay = selectedDate.getDay();
      state.selectedDate = selectedDate;
      state.selectedDay = selectedDay;
    }
  }
})

export const { dateSelected } = calendarSlice.actions;

export default calendarSlice.reducer;

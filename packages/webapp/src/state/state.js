import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "counter",
  initialState: {
    selectedDate: "",
    selectedDay: "",
    hideNavigationCalendar: false,
    events: [],
  },
  reducers: {
    dateSelected: (state, input) => {
      const { date, day } = input.payload;
      state.selectedDate = date;
      state.selectedDay = day;
    },
    eventCreated: (state, eventDetails) => {
      state.events.push(eventDetails.payload);
    }
  },
});

export const { dateSelected, eventCreated } = calendarSlice.actions;

export default calendarSlice.reducer;

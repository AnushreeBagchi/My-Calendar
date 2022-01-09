import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "counter",
  initialState: {
    selectedDate: "",
    selectedDay: "",
  },
  reducers: {
    dateSelected: (state, input) => {
      const { date, day } = input.payload;
      state.selectedDate = date;
      state.selectedDay = day;
    },
  },
});

export const { dateSelected } = calendarSlice.actions;

export default calendarSlice.reducer;

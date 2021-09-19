import { configureStore } from '@reduxjs/toolkit';
import state from './state/state';

export default configureStore({
  reducer: {
      state: state,
  },
})
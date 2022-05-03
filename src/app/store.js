import { configureStore } from '@reduxjs/toolkit';
import alertReducer from '../features/Alert/AlertSclice';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});

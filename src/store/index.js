// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import stopwatchReducer from '../reducers/stopwatchReducer';

const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer
  }
});

export default store;


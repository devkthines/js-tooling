// stopwatchReducer.js
import { START_TIMER, PAUSE_TIMER, RESET_TIMER, INCREMENT_TIME } from '../actions/actionTypes';

const initialState = {
  time: 0,
  isRunning: false
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, isRunning: true };
    case PAUSE_TIMER:
      return { ...state, isRunning: false };
    case RESET_TIMER:
      return { ...state, time: 0, isRunning: false };
    case INCREMENT_TIME:
      return { ...state, time: state.time + 1 }; // Increment time by 1 millisecond
    default:
      return state;
  }
};

export default stopwatchReducer;

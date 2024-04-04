// stopwatchActions.js
import { START_TIMER, PAUSE_TIMER, RESET_TIMER, INCREMENT_TIME } from './actionTypes';

export const startTimer = () => {
  return { type: START_TIMER };
};

export const pauseTimer = () => {
  return { type: PAUSE_TIMER };
};

export const resetTimer = () => {
  return { type: RESET_TIMER };
};

export const incrementTime = () => {
  return { type: INCREMENT_TIME };
};

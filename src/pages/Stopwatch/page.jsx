// Stopwatch.js
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { startTimer, pauseTimer, resetTimer, incrementTime } from "../../actions/stopwatchActions";

const Stopwatch = ({ time, isRunning, startTimer, pauseTimer, resetTimer, incrementTime }) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        incrementTime(); // Dispatch the action to increment time
      }, 1); // Adjust the interval as needed
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, incrementTime]);

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.stopwatch.time,
    isRunning: state.stopwatch.isRunning,
  };
};

export default connect(mapStateToProps, { startTimer, pauseTimer, resetTimer, incrementTime })(Stopwatch);

import React from "react";

const Timer = ({
  hours,
  minutes,
  seconds,
  capture,
  start,
  stop,
  reset,
  lap
}) => {
  return (
    <div className="container">
      <h1>Clock Timer</h1>
      <div className="timer-capture">
        {capture.map((time, index) => {
          return <p className="text">{index + 1 + ". Capture: " + time}</p>;
        })}
      </div>
      <div className="current-time">
        {hours + ":" + minutes + ":" + seconds}
      </div>
      <div className="timer-controller">
        <div className="start-stop">
          <button onClick={start} className="btn btn-success">
            Start Timer
          </button>
          <button onClick={stop} className="btn btn-warning">
            Stop Timer
          </button>
        </div>
        <div className="lap-reset">
          <button onClick={lap} className="btn btn-info">
            Lap
          </button>
          <button onClick={reset} className="btn btn-danger">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

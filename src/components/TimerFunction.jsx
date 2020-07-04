import React, { useState } from 'react';
//import useInterval from 'react-useinterval';

function TimerFunction() {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerStopped, setTimerStopped] = useState(true);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [capture, setCapture] = useState([]);

    let timer;
    const handleStartTimer = () => {
        console.log("clicked")
        if (timerStopped) {
            setTimerStarted(true);
            setTimerStopped(false);
            if (timerStarted) {
                if (minutes === 59) {
                    setHours(hours + 1);
                    setMinutes(0);
                    setSeconds(0);
                }

                if (seconds === 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }

                setSeconds(seconds + 1);
            }
        }
    };
    //useInterval(handleStartTimer, 1000)

    const handleStopTimer = () => {
        setTimerStarted(false);
        setTimerStopped(true);
        clearInterval(timer);
    }

    const handleResetTimer = () => {
        setTimerStarted(false);
        setTimerStopped(true);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setCapture([]);
        clearInterval(timer);
    }

    const handleCaptureTime = () => {
        setCapture([...capture, hours + ":" + minutes + ":" + seconds])
    }

    return (
        <div className="container">
            <h1>Clock Timer</h1>
            <div className="timer-capture">
                {
                    capture.map((time, index) => {
                        return <p key={index} className="text">{(index + 1) + '. Capture: ' + time}</p>
                    })
                }
            </div>
            <div className="current-time">
                {hours + ':' + minutes + ':' + seconds}
            </div>
            <div className="timer-controller">
                <button onClick={handleStartTimer} className="btn btn-success">Start Timer</button>
                <button onClick={handleStopTimer} className="btn btn-warning">Stop Timer</button>
                <button onClick={handleCaptureTime} className="btn btn-info">Lap</button>
                <button onClick={handleResetTimer} className="btn btn-danger">Reset</button>
            </div>
        </div>
    );
}

export default TimerFunction;
import React, { Component } from 'react';


class TimerClass extends Component {
    state = {
        count: 0,
        visibility: false,
        timerStarted: false,
        timerStopped: true,
        hours: 0,
        minutes: 0,
        seconds: 0,
        capture: []
    };

    handleStartTimer = () => {
        if (this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({ timerStarted: true, timerStopped: false });
                if (this.state.timerStarted) {
                    if (this.state.minutes === 59) {
                        this.setState(prevState => ({
                            hours: prevState.hours + 1,
                            minutes: 0,
                            seconds: 0
                        }));
                    }

                    if (this.state.seconds === 59) {
                        this.setState(prevState => ({
                            minutes: prevState.minutes + 1,
                            seconds: 0
                        }));
                    }

                    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
                }
            }, 1000);
        }
    };

    handleStopTimer = () => {
        this.setState({ timerStarted: false, timerStopped: true });
        clearInterval(this.timer);
    };

    handleResetTimer = () => {
        this.setState({
            timerStarted: false,
            timerStopped: true,
            seconds: 0,
            minutes: 0,
            hours: 0,
            capture: []
        });
        clearInterval(this.timer);
    };

    captureTime = () => {
        this.setState(prevState => ({
            capture: [
                ...prevState.capture,
                this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
            ]
        }));
    };

    render() {
        const { hours, minutes, seconds, capture } = this.state;
        return (
            <div className="container">
                <h1>Clock Timer</h1>
                <div className="timer-capture">
                    {
                        capture.map((time, index) => {
                            return <p className="text">{(index + 1) + '. Capture: ' + time}</p>
                        })
                    }
                </div>
                <div className="current-time">
                    {hours + ':' + minutes + ':' + seconds}
                </div>
                <div className="timer-controller">
                    <button onClick={this.handleStartTimer} className="btn btn-success">Start Timer</button>
                    <button onClick={this.handleStopTimer} className="btn btn-warning">Stop Timer</button>
                    <button onClick={this.captureTime} className="btn btn-info">Lap</button>
                    <button onClick={this.handleResetTimer} className="btn btn-danger">Reset</button>
                </div>
            </div>
        );
    }
}

export default TimerClass;
import React, { Component } from "react";
import Incrementer from "./components/Incrementer";
import Visibility from "./components/Visibility";
import Timer from "./components/Timer";

class App extends Component {
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

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleVisibility = () => {
    this.setState(prevState => ({ visibility: !prevState.visibility }));
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
    const { count, visibility, hours, minutes, seconds, capture } = this.state;
    return (
      <div>
        <Incrementer
          count={count}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
        <hr />
        <Visibility
          visibility={visibility}
          showHide={this.handleVisibility}
        />
        <hr />
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          capture={capture}
          start={this.handleStartTimer}
          stop={this.handleStopTimer}
          reset={this.handleResetTimer}
          lap={this.captureTime}
        />
      </div>
    );
  }
}

export default App;

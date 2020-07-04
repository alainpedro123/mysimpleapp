import React from "react";
import Incrementer from "./components/Incrementer";
import Visibility from "./components/Visibility";
import TimerClass from './components/TimerClass';
// import TimerFunction from './components/TimerFunction';

function App() {
  return (
    <div>
      <Incrementer />
      <hr />
      <Visibility />
      <hr />
      <TimerClass />
    </div>
  );
}

export default App;

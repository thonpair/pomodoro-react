import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <button id="break-decrement">-</button>
      <button id="session-decrement">-</button>
      <button id="break-increment">+</button>
      <button id="session-increment">+</button>
      <div id="break-length">5</div>
      <div id="session-length">25</div>
      <div id="timer-label">Session</div>
      <div id="time-left">25:00</div>
      <button id="start_stop">Start/Stop</button>
      <button id="reset">Reset</button>
    </div>
  );
}

export default App;

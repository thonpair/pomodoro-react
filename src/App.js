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
    </div>
  );
}

export default App;

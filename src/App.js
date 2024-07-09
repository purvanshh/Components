import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TimerComponent from './TimerComponent';
import WeatherComponent from './WeatherComponent';
import NotesComponent from './NotesComponent';
import QuotesComponent from './QuotesComponent';
import CalculatorComponent from './CalculatorComponent'; 

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<TimerComponent />} />
          <Route path="/weather" element={<WeatherComponent />} />
          <Route path="/notes" element={<NotesComponent />} />
          <Route path="/quotes" element={<QuotesComponent />} />
          <Route path="/calculator" element={<CalculatorComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page. Click on the links above to navigate.</p>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TimerComponent from './TimerComponent';
import WeatherComponent from './WeatherComponent';
import NotesComponent from './NotesComponent';
import QuotesComponent from './QuotesComponent';

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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<TimerComponent />} />
          <Route path="/weather" element={<WeatherComponent />} />
          <Route path="/notes" element={<NotesComponent />} />
          <Route path="/quotes" element={<QuotesComponent />} />
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

const ChildComponent = React.memo(function({ count, onIncrement, onDecrement, onReset }) {
  console.log("Child component is rendering");
  const isEven = count % 2 === 0;
  return (
    <div>
      <h3>Child Component</h3>
      <h3>Count: {count}</h3>
      <h3>The count is {isEven ? 'even' : 'odd'}.</h3>
      <button onClick={onIncrement}>Increment Counter</button>
      <button onClick={onDecrement}>Decrement Counter</button>
      <button onClick={onReset}>Reset Counter</button>
    </div>
  );
});

function StatisticsComponent({ input, maxCount, minCount, averageCount }) {
  useEffect(() => {
    console.log('Statistics Updated:');
    console.log('Max Count:', maxCount);
    console.log('Min Count:', minCount);
    console.log('Average Count:', averageCount);
    console.log('Input Length:', input.length);
  }, [input, maxCount, minCount, averageCount]);

  return (
    <div className="StatisticsComponent">
      <h3>Statistics Component</h3>
      <p>Max Count: {maxCount}</p>
      <p>Min Count: {minCount}</p>
      <p>Average Count: {averageCount}</p>
      <p>Input Length: {input.length}</p>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="TodoList">
      <h3>Todo List</h3>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

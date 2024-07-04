import React, { useCallback, useState, useEffect, useMemo } from 'react';
import './App.css';
import TimerComponent from './TimerComponent';
import WeatherComponent from './WeatherComponent';
import NotesComponent from './NotesComponent';
import QuotesComponent from './QuotesComponent';

function App() {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [minCount, setMinCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [numChanges, setNumChanges] = useState(0);

  useEffect(() => {
    if (count > maxCount) setMaxCount(count);
    if (count < minCount) setMinCount(count);
    setTotalCount(totalCount + count);
    setNumChanges(numChanges + 1);
  }, [count]);

  const incrementCount = useCallback(() => {
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]);

  const decrementCount = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const averageCount = useMemo(() => {
    return numChanges > 0 ? (totalCount / numChanges).toFixed(2) : 0;
  }, [totalCount, numChanges]);

  const isEven = count % 2 === 0;

  return (
    <div className="App">
      <input 
        type='text' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <p>Character count: {input.length}</p>
      <button onClick={incrementCount}>Increment Counter</button>
      <button onClick={decrementCount}>Decrement Counter</button>
      <button onClick={resetCount}>Reset Counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <h3>The count is {isEven ? 'even' : 'odd'}.</h3>
      <hr />
      <ChildComponent count={count} onIncrement={incrementCount} onDecrement={decrementCount} onReset={resetCount} />
      <StatisticsComponent input={input} maxCount={maxCount} minCount={minCount} averageCount={averageCount} />
      <hr />
      <TodoList />
      <hr />
      <TimerComponent />
      <hr />
      <WeatherComponent />
      <hr />
      <NotesComponent />
      <hr />
      <QuotesComponent />
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

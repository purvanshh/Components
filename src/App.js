import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); 
  const [count, setCount] = useState(0);

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

export default App;

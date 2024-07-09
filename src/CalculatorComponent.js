// CalculatorComponent.js
import React, { useState } from 'react';

function CalculatorComponent() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calcResult;

    switch (operator) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        calcResult = number1 / number2;
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <div className="CalculatorComponent">
      <h3>Calculator</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={() => handleCalculation('+')}>+</button>
        <button onClick={() => handleCalculation('-')}>-</button>
        <button onClick={() => handleCalculation('*')}>*</button>
        <button onClick={() => handleCalculation('/')}>/</button>
      </div>
      {result !== null && <h4>Result: {result}</h4>}
    </div>
  );
}

export default CalculatorComponent;

import React, { useState } from 'react';
import './App.css';

function App() {
  // STATE MANAGEMENT
  // display: what shows on calculator screen
  // previousValue: stores first number when operator is clicked
  // operator: stores which operation (+, -, *, /)
  // waitingForNewValue: flag to know if we should start fresh number
  
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  // FUNCTION: Handle number button clicks
  const handleNumberClick = (num) => {
    if (waitingForNewValue) {
      // If we just clicked an operator, start fresh
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      // Otherwise, append the number
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  // FUNCTION: Handle decimal point
  const handleDecimal = () => {
    // Only add decimal if there isn't one already
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // FUNCTION: Clear everything (AC button)
  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  // FUNCTION: Handle operator clicks (+, -, *, /)
  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      // First number entered
      setPreviousValue(inputValue);
    } else if (operator) {
      // If there's already an operator, calculate result first
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForNewValue(true);
    setOperator(nextOperator);
  };

  // FUNCTION: Perform calculation
  const calculate = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : 'Error';
      default:
        return secondValue;
    }
  };

  // FUNCTION: Handle equals button
  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
    }
  };

  // FUNCTION: Handle percentage
  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  // FUNCTION: Toggle positive/negative
  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  return (
    <div className="calculator">
      {/* Display Screen */}
      <div className="display">{display}</div>

      {/* Calculator Buttons Grid */}
      <div className="buttons">
        {/* Row 1: AC, +/-, %, / */}
        <button className="btn btn-function" onClick={handleClear}>AC</button>
        <button className="btn btn-function" onClick={handleToggleSign}>+/-</button>
        <button className="btn btn-function" onClick={handlePercentage}>%</button>
        <button className="btn btn-operator" onClick={() => handleOperator('/')}>÷</button>

        {/* Row 2: 7, 8, 9, * */}
        <button className="btn" onClick={() => handleNumberClick(7)}>7</button>
        <button className="btn" onClick={() => handleNumberClick(8)}>8</button>
        <button className="btn" onClick={() => handleNumberClick(9)}>9</button>
        <button className="btn btn-operator" onClick={() => handleOperator('*')}>×</button>

        {/* Row 3: 4, 5, 6, - */}
        <button className="btn" onClick={() => handleNumberClick(4)}>4</button>
        <button className="btn" onClick={() => handleNumberClick(5)}>5</button>
        <button className="btn" onClick={() => handleNumberClick(6)}>6</button>
        <button className="btn btn-operator" onClick={() => handleOperator('-')}>−</button>

        {/* Row 4: 1, 2, 3, + */}
        <button className="btn" onClick={() => handleNumberClick(1)}>1</button>
        <button className="btn" onClick={() => handleNumberClick(2)}>2</button>
        <button className="btn" onClick={() => handleNumberClick(3)}>3</button>
        <button className="btn btn-operator" onClick={() => handleOperator('+')}>+</button>

        {/* Row 5: 0 (wide), ., = */}
        <button className="btn btn-zero" onClick={() => handleNumberClick(0)}>0</button>
        <button className="btn" onClick={handleDecimal}>.</button>
        <button className="btn btn-equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default App;
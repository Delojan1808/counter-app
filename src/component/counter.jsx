import React, { useState } from 'react';
import './counter.css';
import { FaDivide, FaTimes, FaMinus, FaPlus, FaEquals } from 'react-icons/fa'; // Import icons

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to calculate the result when "=" is clicked
  const handleEqual = () => {
    try {
      setResult(eval(input)); // Use eval to evaluate the expression
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to clear the input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      {/* Display Area */}
      <div className="display">
        <input type="text" value={input} disabled />
        <p className="result">{result}</p>
      </div>

      {/* Calculator Buttons */}
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('/')}><FaDivide /></button>
        <button onClick={() => handleClick('*')}><FaTimes /></button>
        <button onClick={() => handleClick('-')}><FaMinus /></button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}><FaPlus /></button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={handleEqual} className="equals"><FaEquals /></button>

        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
}

export default App;

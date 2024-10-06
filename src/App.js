import './App.css';
import { useState } from 'react';


function Key({ label, clickHandler, className='' }) {
  return (
    <button className={className} onClick={() => clickHandler(label)}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="Display">
      {value}
    </div>
  );
}

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [disp, setDisp] = useState('');

  const handleNumberClick = (value) => {
    if (value === '.' && currentValue.includes('.')) return;
    setCurrentValue(currentValue + value); 
  };

  const handleOperatorClick = (op) => {
    if (currentValue === '') return;

    if (previousValue === null) {
      setPreviousValue(currentValue); 
    } else if (operator) {
      const result = performCalculation();
      setPreviousValue(result);
    }

    setCurrentValue('');
    setOperator(op);
  };

  const performCalculation = () => {
    if (previousValue !== null && operator && currentValue !== '') {
      const prev = parseFloat(previousValue);
      const curr = parseFloat(currentValue);
      switch (operator) {
        case '+':
          return (prev + curr).toString();
        case '-':
          return (prev - curr).toString();
        case '×':
          return (prev * curr).toString();
        case '÷':
          return curr !== 0 ? (prev / curr).toString() : 'Error'; 
        default:
          return currentValue;
      }
    }
    return currentValue;
  };

  const handleEqualClick = () => {
    if (operator && previousValue !== null) {
      const result = performCalculation();
      setCurrentValue(result);
      setPreviousValue(null);
      setOperator(null); 
    }
  };

  const handleClearClick = () => {
    setCurrentValue('');
    setPreviousValue(null);
    setOperator(null);
    setDisp('');
  };

  const handlePercentageClick = () => {
    if (currentValue !== '') {
      const percentageValue = (parseFloat(currentValue) / 100).toString();
      setCurrentValue(percentageValue);
    }
  };

  
  const handleBackspaceClick = () => {
    setCurrentValue(currentValue.slice(0, -1)); 
  };

  
  const handleToggleSignClick = () => {
    if (currentValue !== '') {
      setCurrentValue((parseFloat(currentValue) * -1).toString());
    }
  };

  const genericClickHandler = (value) => {
    if (!isNaN(value) || value === '.') {
      handleNumberClick(value);
    } else if (value === 'AC') {
      handleClearClick(); 
    } else if (value === '=') {
      handleEqualClick(); 
    } else if (value === '%') {
      handlePercentageClick(); 
    } else if (value === '←') {
      handleBackspaceClick(); 
    } else if (value === '±') {
      handleToggleSignClick(); 
    } else {
      handleOperatorClick(value); 
    }
  };

  const briolaClickHandler = () => {
    setDisp("JOE PETE BRIOLA"); // Set display value
  };

  return (
    <div className="App">
      <h1>Calculator of Joe Pete Briola - IT3A</h1>
      <div className="Calc-container">
        <div className="Display-container">
          <Display value={disp || currentValue || previousValue || '0'} />
        </div>
        <div className="Button-container">
          <Key label={7} clickHandler={genericClickHandler} />
          <Key label={8} clickHandler={genericClickHandler} />
          <Key label={9} clickHandler={genericClickHandler} />
          <Key className="clear" label={'AC'} clickHandler={genericClickHandler} />
          <Key className="operation" label={'÷'} clickHandler={genericClickHandler} />
          <Key label={4} clickHandler={genericClickHandler} /> 
          <Key label={5} clickHandler={genericClickHandler} />
          <Key label={6} clickHandler={genericClickHandler} />
          <Key className="clear" label={'±'} clickHandler={genericClickHandler} />
          <Key className="operation" label={'×'} clickHandler={genericClickHandler} />
          <Key label={1} clickHandler={genericClickHandler} />
          <Key label={2} clickHandler={genericClickHandler} />
          <Key label={3} clickHandler={genericClickHandler} />
          <Key className="clear" label={'%'} clickHandler={genericClickHandler} /> 
          <Key className="operation" label={'+'} clickHandler={genericClickHandler} />
          <Key label={'.'} clickHandler={genericClickHandler} /> {/* Backspace */}
          <Key label={'0'} clickHandler={genericClickHandler} /> {/* Toggle Sign Button */}
          <Key label={'←'} clickHandler={genericClickHandler} />
          <Key className="operation" label={'='} clickHandler={genericClickHandler} />
          <Key className="operation" label={'-'} clickHandler={genericClickHandler} /> 
          
        </div>
          
      </div>
      <Key className="briola" label={'BRIOLA'} clickHandler={briolaClickHandler} />
    </div>
  );
}

export default App;

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
  const [disp, setDisp] = useState('');

  const descriptions = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic",
    RESET: "10 Things That Require Zero Talent",
  };

  const handleClick = (value) => {
    if (value === 'RESET') {
      setDisp(descriptions.RESET);
    } else if (value === 'NAME') {
      setDisp('JOE PETE BRIOLA');  // Display your full name
    } else if (descriptions.hasOwnProperty(value)) {
      setDisp(descriptions[value]);
    } else {
      setDisp(currentValue);
    }
  };

  const handleClearClick = () => {
    setDisp('');
  };

  return (
    <div className="App">
      <h1>Joe Pete Briola - IT3A</h1>
      <div className="Calc-container">
        <div className="Display-container">
          <Display value={disp || 'Click a key to display a value!'} />
        </div>
        <div className="Button-container">
          <Key label={1} clickHandler={handleClick} />
          <Key label={6} clickHandler={handleClick} />
          <Key label={2} clickHandler={handleClick} />
          <Key label={7} clickHandler={handleClick} />
          <Key label={3} clickHandler={handleClick} />
          <Key label={8} clickHandler={handleClick} />
          <Key label={4} clickHandler={handleClick} />
          <Key label={9} clickHandler={handleClick} />
          <Key label={5} clickHandler={handleClick} />
          <Key label={0} clickHandler={handleClick} />
          <Key label={'RESET'} clickHandler={handleClick} />
          <Key label={'NAME'} clickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;

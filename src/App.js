import React, { useState } from 'react';

const App = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === '') || (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === '') return;

    const newValue = calc.slice(0, -1);

    setCalc(newValue);
  };

  const buttonGenerator = () => {
    const buttons = [];

    for (let i = 1; i < 10; i++) {
      buttons.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='App'>
      <h2>Vegetable Calculat🍅r</h2>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''} {calc || '0'}
        </div>
        <div className='operators'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className='digits'>
          {buttonGenerator()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
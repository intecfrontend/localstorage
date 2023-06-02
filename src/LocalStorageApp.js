import React, { useState, useEffect } from 'react';

const LocalStorageApp = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('inputValue2');
    if (storedValue) {
      setInputValue2(storedValue);
    }
  }, []);

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    const value = event.target.value;
    setInputValue2(value);
    localStorage.setItem('inputValue2', value);
  };
  const handleReset = () => {
    setInputValue1('')
    setInputValue2('')
    // localStorage.removeItem('inputValue2')
  }
  return (
    <div>
      <h2>Input 1: {inputValue1}</h2>
      <input type="text" value={inputValue1} onChange={handleInputChange1} />
      <h2>Input 2: {inputValue2}</h2>
      <input type="text" value={inputValue2} onChange={handleInputChange2} />
      <div>
      <button onClick={handleReset}>empty the input fields</button>
      <h1>Please press the refresh sign, <br/></h1>
      </div>
    </div>
  );
};

export default LocalStorageApp;

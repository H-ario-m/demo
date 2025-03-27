// App3.js
import React, { useState } from 'react';

const App3 = (props) => {
  const [fontSize, setFontSize] = useState(16);
  const [font2Size, setFont2Size] = useState(30);
  const [rate, setRate] = useState(0);

  const increaseFontSize = () => {
    setFontSize(fontSize + 8);
    setRate(rate + 500);
  };

  const decreaseFontSize = () => {
    setFont2Size(font2Size - 8);
    setRate(rate + 500);
  };

  const income = props.count * rate ; // Correct income calculation

  return (
    <div>
      <p>
        <span style={{ fontSize: `${fontSize}px` }} onClick={increaseFontSize}>(.)(.)</span>
        <span style={{ fontSize: `${font2Size}px` }} onClick={decreaseFontSize}>(o)</span>
      </p>
      <button onClick={increaseFontSize}>soumya ke badhao</button>
      <p>Rate: {rate}</p>
      <p>Income: {income}</p> {/* Display the calculated income */}
    </div>
  );
};

export const App5 = (name) => `welcome ${name} customers`;

export default App3;

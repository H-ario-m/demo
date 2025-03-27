// App.js
import React, { useState } from 'react';
import App3,{App5} from './App3';

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
   setCount(count+1);
  };
  function decrement() {
    setCount(count-1);
   };

   const [names, setName] = useState('');
   const [age, setAge] = useState('');
 
   const handleSubmit = (event) => {
     event.preventDefault();
   };

  return (
    <div>


<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={names} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* <p>Name: {names}</p>
      <p>Age: {age}</p> */}

<p> {App5 (count)}</p>
      <div className='name'>Count: {count}</div>
      <button onClick={count<10&&increment}>+</button>
      <button onClick={count>-10 && decrement}>-</button>
      <AppState/>
      <p>Name: {names}</p>
      <p>Age: {age}</p>
      <App3 count={count} />
     
    </div>
  )
}

const AppState = () => {
  return (
    <div>Soumya ke customer</div>
  )
}

export default App
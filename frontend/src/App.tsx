import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [msg, setMsg] = useState()
  const handleClick = async () => {
      const data = await window.fetch('api/youtube')
      const json = await data.json()
      console.log(json)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={handleClick}>
            dis bonjour 
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

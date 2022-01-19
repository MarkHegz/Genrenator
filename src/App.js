import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RandomGenre from './RandomGenre.js';
import { Component } from 'react/cjs/react.production.min';


function App() {
  const [ randomNumber, setRandomNumber] = useState()

  
  const handleClick=(props) => {
        // const randomNumber = setRandomNumber[Math.floor(Math.random()* randomNumber.length)];
        // randomNumber = setRandomNumber;

    
    console.log("button clicked");
  }

  return (
    <div className="wrapper">
      <header>
        <h1>Genrenator</h1>
      </header>
      <main>
          <h2>Click the button below to explore a random genre</h2>
        <div className="clickMe">
         <button onClick={handleClick}>Click me</button>
        </div>
        < RandomGenre />
      </main>
      <footer>
        <p>Created at&nbsp;<a href="https://junocollege.com/">Juno College</a></p>
      </footer>
    </div>

  );
}

export default App;

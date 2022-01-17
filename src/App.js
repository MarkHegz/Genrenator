import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RandomGenre from './RandomGenre.js';


function App() {

  const handleClick=() => {
    console.log("button clicked");
  }

  const [genre, setGenre] = useState([]); // takes info 
  const [visible, setVisible] = useState(1);

  
  


  return (
    <div className="App">
      <h1>Genrenator</h1>
      <h2>Click the button below to explore a random genre!</h2>
      <button onClick={handleClick}>Click me</button>
      < RandomGenre />
    </div>
  );
}

export default App;

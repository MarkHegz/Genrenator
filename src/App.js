import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RandomGenre from './RandomGenre.js';
import { Component } from 'react/cjs/react.production.min';


function App() {

  
  const handleClick=(props) => {
    
    console.log("button clicked");
  }

  const [genre, setGenre] = useState([]); // takes info 
  const [visible, setVisible] = useState(1);
  const [genreInfo, setGenreInfo] = useState();

  
  


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

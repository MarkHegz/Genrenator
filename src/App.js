import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RandomGenre from './RandomGenre.js';


function App() {

  const [genre, setGenre] = useState(); // takes info 


  //   // api call
  // useEffect( () => {
  //   axios({
  //     url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
  //     method: "GET",
  //     dataResponse: "json",

  // }) . then( (response) => {
  //   console.log(response.data);
  //   setGenre(response.data);
  // });
  // })
  return (
    <div className="App">
      <h3>The genre you should explore is.........{genre}</h3>
      {/* < RandomGenre /> */}

    </div>
  );
}

export default App;

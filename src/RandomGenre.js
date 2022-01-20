import { useState } from "react";
import axios from "axios";

const RandomGenre = () => {

  const [genreInfo, setGenreInfo] = useState([]);


  const handleClick = () => {

  axios({
    url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
    method: "GET",
    dataResponse: "json",
  }) . then( (response) => {
  setGenreInfo(response.data);
  }) 
  .catch(error => {
  console.log(error)
  })
  } 

  return (
    <main>
      <h2>Click the button below to explore a random genre</h2>
      <div className="clickMe">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="genreContent">
        <h3>{genreInfo}</h3>
      </div>
    </main>
  )
}
export default RandomGenre;
import { useEffect, useState } from "react";
import axios from "axios";



const RandomGenre = () => {

    const [genreInfo, setGenreInfo] = useState([]);


  //      api call      //
  const handleClick = () => {

    axios({
      url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
      method: "GET",
      dataResponse: "json",

  }) . then( (response) => {
    console.log(response.data);
    setGenreInfo(response.data);
  })
  .catch(error => {
    console.log(error)
  })
  } 

    return (
        <div>
        <div className="clickMe">
          <button onClick={handleClick}>Click me</button>
        </div>
        <div className="genreContent">
            <h3>{genreInfo}</h3>
        </div>
        </div>
    )
}


export default RandomGenre;
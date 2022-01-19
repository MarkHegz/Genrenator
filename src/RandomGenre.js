import { useEffect, useState } from "react";
import axios from "axios";



const RandomGenre = (props) => {

    const [genreInfo, setGenreInfo] = useState([]);

  //      api call      //
  useEffect( () => {
    // const myArray = [];
    // const randomNumber = myArray[Math.floor(Math.random()*myArray.length)];
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
  }, [])

    return (
        <div>
            <h3>{genreInfo}</h3>
        </div>
    )
}


export default RandomGenre;
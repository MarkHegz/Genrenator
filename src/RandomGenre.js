import { useEffect, useState } from "react";
import axios from "axios";



const RandomGenre = (props) => {

    const [genreInfo, setGenreInfo] = useState();
    const url = "https://binaryjazz.us/wp-json/genrenator/v1/genre/1";

  //      api call      //
  
  useEffect( () => {
    axios({
      url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/1",
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
            <h3>The genre you should explore is.........{genreInfo}</h3>
        </div>
    )
}


export default RandomGenre;
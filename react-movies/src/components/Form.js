import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=33a2f6344efc17ed3f1a2c243e2f2081&query=star&language=fr-FR'
    ).then((res) => setMoviesData(res.data.results));


  },[]);
  
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
            <input type="text" placeholder="Entrez le titre d'un film" 
            id="search-input" />
            <input type="submit" value="Recherche"/>
        </form>

        <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad">
                Top<span>&#8594;</span>
            </div>
            <div className="btn-sort" id="badToGood">
                Flop<span>&#8594;</span>
            </div>
        </div>
      </div>
      <div className="result">
        {moviesData.map((movie) => )}
      </div>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const routeParameters = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchMovieId(imdbID) {
      const data = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=df2a5c6f`
      ).then((r) => r.json());
      console.log(data);
      setMovies(data);
      console.log(movies);
    }
    fetchMovieId(routeParameters.imdbID);
  }, []);

  return (
    <div>
      <h1>{movies.Title}</h1>
      <p>
        Description:
        <br />
        {movies.Plot}
      </p>
      <img src={movies.Poster} />
    </div>
  );
}

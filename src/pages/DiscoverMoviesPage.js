import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState("idle");
  const [movies, setMovies] = useState([]);

  const search = async () => {
    try {
      setSearchState("searching...");
      const queryParam = encodeURIComponent(searchText);
      const data = await fetch(
        `https://omdbapi.com/?apikey=df2a5c6f&s=${queryParam}`
      ).then((r) => r.json());
      console.log("data:", data);
      setMovies(data.Search);
      setSearchState("done");
    } catch (error) {
      setSearchState("unable to find");
    }
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h5>Search status: {searchState}</h5>
      <p>
        <input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>

      {movies.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <Link to={`/discover/${movie.imdbID}`}>{movie.Title}</Link>
            <h4>Release year:{movie.Year}</h4>
            <img src={movie.Poster} alt="Poster" />
          </div>
        );
      })}
    </div>
  );
}

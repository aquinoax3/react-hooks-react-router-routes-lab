import React from "react";
import { movies } from "../data";

function Movies() {
  const listMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h1>Title: {movie.title}</h1>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies}
    </div>
  );
}

export default Movies;

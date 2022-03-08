import React from "react";
import { directors } from "../data";

function Directors() {
  const listDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors;

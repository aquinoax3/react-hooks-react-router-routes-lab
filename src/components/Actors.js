import React from "react";
import { actors } from "../data";

function Actors() {
  const listActors = actors.map((actor) => {
    return (
      <div>
        <h1>{actor.name}</h1>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie) => (
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {listActors}
    </div>
  );
}

export default Actors;

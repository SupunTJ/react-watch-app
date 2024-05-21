import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return { movieList: ["Die Hard", "Harry Ptter"] };
  });

  function handleAddMovie(newMovie) {
    setMovieState((prevState) => {
      return {
        ...prevState,
        movieList: prevState.movieList.concat([newMovie]),
      };
    });
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  );
};

export default MoviePage;

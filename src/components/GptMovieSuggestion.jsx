import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if(!movieNames) return null;

  return (
    <div className="bg-black/50 bg-gradient-to-t from-black ">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]?.results}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;

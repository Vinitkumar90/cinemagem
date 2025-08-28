import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  console.log(movies);
  return (
    <div className="px-2 py-4">
      <div className="text-3xl font-bold px-6 text-white">{title}</div>
      <div className="flex gap-4 py-4  overflow-x-scroll no-scrollbar pl-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

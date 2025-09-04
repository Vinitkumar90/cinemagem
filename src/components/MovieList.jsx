import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {

  return (
    <div className="px-2 py-4 ">
      <div className=" text-xl md:text-3xl font-bold px-6 text-white">{title}</div>
      <div className="flex gap-4 py-4  overflow-x-scroll no-scrollbar pl-6">
        {console.log(movies)}
        {movies?.map((movie) => (
          <MovieCard key={movie.id} id={movie.id}  poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

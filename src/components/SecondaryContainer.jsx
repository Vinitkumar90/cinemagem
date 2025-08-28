import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-32 relative z-20">
          <MovieList
            title="Now Playing Movies"
            movies={movies.nowPlayingMovies}
          />
          <MovieList title="Popular One's" movies={movies.popularMovies} />
          <MovieList title="Highest Rated" movies={movies.ratedMovies} />
          <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constant";
import { Link } from "react-router";

const MovieCard = ({ id, poster }) => {
  if(!poster)return null;
  return (
    <div className="bg-neutral-100/10 hover:bg-neutral-300 p-0.5 rounded ">
      <Link to={"/MoviePage/"+id}>
        <div className="w-24 md:w-48">
          <img
            src={MOVIE_POSTER_URL + poster}
            alt="poster"
            className="rounded"
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

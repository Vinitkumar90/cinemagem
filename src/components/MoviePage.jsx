import React, { useEffect } from "react";
import { useParams } from "react-router";
import { MOVIE_POSTER_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieData,
  addMovieVideo,
  deleteData,
} from "../utils/movieInfoSlice";

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movieInfo.movieData);
  const movieVideo = useSelector((store) => store.movieInfo.movieVideo);

  //when opeinig this page i will send request for theat movied id to get its info and its video
  useEffect(() => {
    const getVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const json = await data.json();

      const trailer = json.results.find(
        (res) => res.type === "Trailer" && res.site === "YouTube"
      );
      dispatch(addMovieVideo(trailer));
    };

    const getData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      const json = await data.json();
      dispatch(addMovieData(json));
    };

    getVideo();
    getData();

    return () => {
      dispatch(deleteData());
    };
  }, []);

  if (!movieData) return null;
  const {
    original_title,
    budget,
    revenue,
    runtime,
    vote_average,
    vote_count,
    overview,
    status,
    poster_path,
    release_date,
  } = movieData;

  return (
    <div className="w-full bg-black flex flex-col">
      {/* movie video */}
      <div className="">
        <iframe
          className=" w-full h-[600px] "
          src={`https://www.youtube.com/embed/${movieVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${movieVideo?.key}&controls=0&showinfo=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/* movie data */}
      <div className="text-white p-2  flex gap-8 justify-center">
        <div className="max-w-52">
          <img src={MOVIE_POSTER_URL + poster_path} alt="" />
        </div>
        <div className="border-2 border-neutral-600 shadow-red-400 shadow-2xl rounded-4xl flex flex-col gap-2 px-4 py-2">
          <div className="text-center">
              <h1 className="text-2xl font-bold uppercase ">{original_title}</h1>
          </div>
        
          <h1>Budget for {original_title+" is "+budget}</h1>
          <h1>Total revenue till now is ${" "+revenue}</h1>
          <h1>Total runtime is{" "+runtime}</h1>
          <h1>{vote_average}⭐</h1>
          <h1>{vote_count}</h1>
          <h1>{overview}</h1>
          <div className="flex gap-2">Status:
              <h1 className="bg-red-300 rounded px-2 text-black">{status}</h1>
          </div>
          <h1>{release_date}</h1>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

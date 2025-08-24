import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies); //thhis shit has 20 movies

  if (!nowPlayingMovies)
    return <p className="text-black font-bold">Loading...</p>; //doing an early return here

  const mainMovie = nowPlayingMovies[0];
  console.log(mainMovie);

  const { title, overview, id } = mainMovie;

  return (
    <div className="bg-black overflow-hidden relative ">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useVideoTrailer = ({movieId}) => {
    const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const json = await data.json();

    const trailer = json.results.find(
      (res) => res.type === "Trailer" && res.site === "YouTube"
    );
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
  
};

export default useVideoTrailer;
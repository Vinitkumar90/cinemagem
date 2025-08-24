import { useDispatch } from "react-redux";
import { api_url, options } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovie = () => {

    const dispatch = useDispatch();

    const getPlayingMovies = async () => {
        const data = await fetch(api_url, options); //fetch movies data
        const json = await data.json();
    
        dispatch(addNowPlayingMovies(json.results));
      };
    
      useEffect(() => {
        getPlayingMovies();
      }, []);
}

export default useNowPlayingMovie;
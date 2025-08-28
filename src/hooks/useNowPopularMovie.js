import { useEffect } from "react"
import {options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice";



const useNowPopularMovie = () => {

    const dispatch = useDispatch();

   const popularMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",options)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        popularMovie();
    },[])
}

export default useNowPopularMovie
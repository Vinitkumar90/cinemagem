import { useEffect } from "react"
import {options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovie = () => {

    const dispatch = useDispatch();

   const upcomingMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",options)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        upcomingMovie();
    },[])
}

export default useUpcomingMovie
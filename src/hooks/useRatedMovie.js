import { useEffect } from "react"
import {options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addRatedMovies } from "../utils/movieSlice";



const useRatedMovie = () => {

    const dispatch = useDispatch();

   const ratedMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",options)
        const json = await data.json();
        dispatch(addRatedMovies(json.results))
    }

    useEffect(()=>{
        ratedMovie()
    },[])
}

export default useRatedMovie
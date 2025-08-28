import React from 'react'
import {MOVIE_POSTER_URL} from "../utils/constant"

const MovieCard = ({movie,poster}) => {
  return (
    <div className='bg-neutral-100/10 p-0.5 rounded '>
        
        <div className='w-48'>
            <img src={MOVIE_POSTER_URL+poster} alt="poster" className='rounded' />
        </div>
    </div>
  )
}

export default MovieCard
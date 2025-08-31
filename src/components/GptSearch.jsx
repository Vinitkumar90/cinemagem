import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_POSTER } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_POSTER}
          className="w-screen"
        alt="bg" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
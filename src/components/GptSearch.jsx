import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_POSTER } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed top-0 right-0 left-0 -z-10'>
        <img src={BG_POSTER}
          className="w-screen h-screen object-cover"
        alt="bg" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
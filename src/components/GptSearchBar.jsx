import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/gemini";
import { options } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const searchRef = useRef(null);
  const changeLang = useSelector((store) => store.language.lang);

  const tmdbCall = async (movie) => {
    const data = await fetch( `https://api.themoviedb.org/3/search/movie?query=${movie}&page=1`,options);
    const result = await data.json();
    return result
  }

  const handleSearch = async () => {
    console.log(searchRef.current.value);

    const prompt = "Act as a movie recommendation system and suggest some movies for the query: " +
        searchRef.current.value +
        " only give me names of movies, comma separated and no other text other than that";

      const result = await ai.models.generateContent({
        model:"gemini-1.5-flash",
        contents: prompt, 
      })
      const came = result?.candidates[0]?.content?.parts[0]?.text;
      console.log("gemini result "+came);
      const geminiResult = came.split(",");

      const searchPromise = geminiResult.map((movie) => {
       return tmdbCall(movie);
      })    
      const tmdbResult = await Promise.all(searchPromise);
      console.log(tmdbResult);
      //gemini result = "m1,m2,m3"
      //tmdb result = [{m1 info},{m2 info},{m3 info}]
      dispatch(addGptMovieResult({movieNames:geminiResult,movieResults:tmdbResult}))
  };

  return (
    <div
      className="pt-[20%] sm:pt-[10%] flex justify-center mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="w-1/2 bg-black grid  grid-cols-12">
        <input
          type="text"
          ref={searchRef}
          className="p-2 sm:p-4 sm:m-4 col-span-9 text-sm rounded m-1 bg-white text-black"
          placeholder={lang[changeLang].gptSearchHolder}
        />
        <button
          className="col-span-3 sm:m-2 md:m-4  py-2 sm:px-4 text-xs sm:text-sm md:text-lg m-1 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >{
          lang[changeLang].search
        }
         
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

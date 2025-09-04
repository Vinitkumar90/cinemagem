import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        addGptToggle:(state) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state,action) => {
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults
        }
    }
})

export default gptSlice.reducer;
export const{addGptToggle,addGptMovieResult} = gptSlice.actions;
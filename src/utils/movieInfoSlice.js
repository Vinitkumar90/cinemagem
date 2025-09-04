import { createSlice } from "@reduxjs/toolkit";


const movieInfoSlice = createSlice({
    name:"movieInfo",
    initialState:{
        movieData:null,
        movieVideo:null
    },
    reducers:{
        //to add movie data
        addMovieData: (state,action) => {
            state.movieData = action.payload;
        },
        //to add movie video
        addMovieVideo: (state,action)=>{
            state.movieVideo = action.payload;
        },
        //to delete movie info 
        deleteData: (state) => {
            state.movieData = null,
            state.movieVideo = null
        }
    }
})

//export movie actions
export const {addMovieData,addMovieVideo,deleteData} = movieInfoSlice.actions;
export default movieInfoSlice.reducer;
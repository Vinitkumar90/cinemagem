import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieTrailer: null,
    nowPlayingMovies: null,
    popularMovies: null,
    ratedMovies: null,
    upcomingMovies: null
  },
  reducers: {
    addMovieTrailer:(state,action)=>{
        state.movieTrailer = action.payload
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addRatedMovies: (state, action) => {
      state.ratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {addMovieTrailer, addNowPlayingMovies, addPopularMovies, addRatedMovies, addUpcomingMovies  } = movieSlice.actions;

export default movieSlice.reducer;

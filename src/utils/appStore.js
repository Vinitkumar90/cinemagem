import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import moviesReducer from "./movieSlice.js"
import gptReducer from "./gptSlice.js"
import langReducer from "./langSlice.js"
import movieInfoReducer from "./movieInfoSlice.js"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movie: moviesReducer,
        gpt: gptReducer,
        language: langReducer,
        movieInfo: movieInfoReducer
    }
})


export default appStore;
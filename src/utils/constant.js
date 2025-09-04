export const dp_url =
  "https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201";

export const api_url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
  },
};

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const BG_POSTER =
  "https://static.vecteezy.com/system/resources/thumbnails/044/514/545/small_2x/background-a-movie-theater-where-love-stories-are-unfolding-on-the-big-screen-and-the-smell-of-popcorn-fills-the-air-photo.jpg";

export const SUPPORTED_LANG = [
  {
    identifier: "english",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];


export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY


